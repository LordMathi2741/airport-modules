import { Inject, Injectable } from "@nestjs/common";
import { IAuthService } from "./iauth.service";
import { AuthMSG } from "src/common/constants";
import { MessagePattern, Payload } from "@nestjs/microservices";
import { SignInDTO } from "../dto/sign-in.dto";
import { SignUpDTO } from "../dto/sign-up.dto";
import { UserResponseDTO } from "../dto/user-response.dto";
import { IAuthRepositoryToken } from "../repositories/auth.repository";


@Injectable()
export class AuthService implements IAuthService{
    constructor(@Inject(IAuthRepositoryToken) private readonly authService: IAuthService) {}

    @MessagePattern(AuthMSG.SIGN_IN)
    async signIn(@Payload() signInDTO: SignInDTO): Promise<UserResponseDTO> {
        return await this.authService.signIn(signInDTO);
    }
    @MessagePattern(AuthMSG.SIGN_UP)
    async signUp(@Payload() signUpDTO: SignUpDTO): Promise<string> {
        return await this.authService.signUp(signUpDTO);
    }
}

export const IAuthServiceToken = "IAuthServiceToken";