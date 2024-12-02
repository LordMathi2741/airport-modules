import { SignInDTO } from "../dto/sign-in.dto";
import { SignUpDTO } from "../dto/sign-up.dto";
import { UserResponseDTO } from "../dto/user-response.dto";

export interface IAuthService {
    signIn(signInRequest: SignInDTO): Promise<UserResponseDTO>;
    signUp(signUpRequest: SignUpDTO): Promise<string>;
}