import { Body, Controller, Inject, Post} from "@nestjs/common/decorators";
import { IAuthServiceToken } from "../services/auth.service";
import { IAuthService } from "../services/iauth.service";
import { SignInDTO } from "../dto/sign-in.dto";
import { UserResponseDTO } from "../dto/user-response.dto";
import { SignUpDTO } from "../dto/sign-up.dto";


@Controller("api/v1/auth")
export class AuthController {
    constructor(@Inject(IAuthServiceToken) private readonly authService: IAuthService) {}

    @Post("sign-in")
    async signIn(@Body() signInDTO: SignInDTO): Promise<UserResponseDTO> {
        return await this.authService.signIn(signInDTO);
    }

    @Post("sign-up")
    async signUp(@Body() signUpDTO: SignUpDTO): Promise<string> {
        return await this.authService.signUp(signUpDTO);
    }
  
}