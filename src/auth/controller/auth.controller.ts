import { Controller, Inject} from "@nestjs/common/decorators";
import { IAuthServiceToken } from "../services/auth.service";
import { IAuthService } from "../services/iauth.service";
import { UserResponseDTO } from "../dto/user-response.dto";
import { SignInDTO } from "../dto/sign-in.dto";
import { SignUpDTO } from "../dto/sign-up.dto";
import { MessagePattern, Payload } from "@nestjs/microservices";
import { AuthMSG } from "src/common/constants";

@Controller("api/v1/auth")
export class AuthController {
  constructor(@Inject(IAuthServiceToken) private readonly authService: IAuthService) {}

    @MessagePattern(AuthMSG.SIGN_IN)
    async signIn(@Payload() signInDTO: SignInDTO): Promise<UserResponseDTO> {
        return await this.authService.signIn(signInDTO);
    }
    @MessagePattern(AuthMSG.SIGN_UP)
    async signUp(@Payload() signUpDTO: SignUpDTO): Promise<string> {
        return await this.authService.signUp(signUpDTO);
    }
  
}