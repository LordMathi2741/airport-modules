import { SignInDTO } from "../dto/sign-in.dto";
import { UserResponseDTO } from "../dto/user-response.dto";
import { SignUpDTO } from '../dto/sign-up.dto';

export interface IAuthRepository {
    signIn(signInRequest: SignInDTO): Promise<UserResponseDTO>
    signUp(signUpRequest: SignUpDTO) : Promise<string>
}