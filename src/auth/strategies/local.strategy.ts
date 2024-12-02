import { Inject, Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from 'passport-local';
import { SignInDTO } from "../dto/sign-in.dto";
import { IAuthServiceToken } from "../services/auth.service";
import { IAuthService } from "../services/iauth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
    constructor(@Inject(IAuthServiceToken) private readonly authService: IAuthService) {
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