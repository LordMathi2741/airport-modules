import { BadRequestException, Injectable, UnauthorizedException } from "@nestjs/common";
import { SignInDTO } from "../dto/sign-in.dto";
import { SignUpDTO } from "../dto/sign-up.dto";
import { UserResponseDTO } from "../dto/user-response.dto";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "../schema/user.schema";
import { Model } from "mongoose";
import { IAuthService } from "./iauth.service";
import * as bcrypt from "bcrypt";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService implements IAuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private jwtService: JwtService 
  ) {}

  async signIn(signInRequest: SignInDTO): Promise<UserResponseDTO> {
    const user = await this.userModel.findOne({ email: signInRequest.email }).exec();
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isValid = await bcrypt.compare(signInRequest.password, user.password);
    if (!isValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { email: user.email, sub: user._id };
    const token = this.jwtService.sign(payload);

    return new UserResponseDTO(user.email, user.username, token);
  }

  async signUp(signUpRequest: SignUpDTO): Promise<string> {
    const existingUser = await this.userModel.findOne({ email: signUpRequest.email }).exec();
    if (existingUser) {
      throw new BadRequestException('Email already in use');
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(signUpRequest.password, salt);
    const newUser = new this.userModel({ ...signUpRequest, password: hashedPassword });
    await newUser.save();

    return "User created successfully";
  }
}

export const IAuthServiceToken = "IAuthServiceToken";
