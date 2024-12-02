import { Inject, Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from 'passport-local';
import { AuthService, IAuthServiceToken } from "../services/auth.service";
import { SignInDTO } from "../dto/sign-in.dto";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
    constructor(@Inject(IAuthServiceToken) private readonly authService: AuthService){
        super();
    }

    async validate(email: string, password: string) : Promise<any>{
        const signInRequest= new SignInDTO(email, password);
        const user = await this.authService.signIn(signInRequest)
        if (!user) {
            throw new UnauthorizedException();
        }
        return user;
    }
}