import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { User, UserSchema } from './schema/user.schema';
import { AuthRepository, IAuthRepositoryToken } from './repositories/auth.repository';
import { AuthController } from './controller/auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';
import { AuthService, IAuthServiceToken } from './services/auth.service';

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
            provide: IAuthRepositoryToken,
            useClass: AuthRepository,
        },
        {
            provide: IAuthServiceToken,
            useClass: AuthService,
        },
        LocalStrategy,
        JwtStrategy,
        
    ],
    exports: [IAuthRepositoryToken, IAuthServiceToken],
})
export class AuthModule {}
