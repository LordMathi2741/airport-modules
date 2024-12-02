import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { User, UserSchema } from './schema/user.schema';
import { AuthService, IAuthServiceToken } from './services/auth.service';
import { AuthController } from './controller/auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
    imports: [
        PassportModule,
        MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
        JwtModule.register({
            secret: process.env.JWT_SECRET,
            signOptions:{
              expiresIn: process.env.EXPIRES_IN,
              audience: process.env.APP_URL,
            }
          })
    ],
    controllers: [AuthController],
    providers: [
        {
            provide: IAuthServiceToken,
            useClass: AuthService,
        },
        LocalStrategy,
        JwtStrategy,
        
    ],
    exports: [IAuthServiceToken],
})
export class AuthModule {}
