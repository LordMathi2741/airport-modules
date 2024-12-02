import { IsEmail, IsNotEmpty, IsString, IsStrongPassword } from "class-validator";

export class SignUpDTO{
    @IsString()
    @IsNotEmpty()
    username: string;
    @IsEmail()
    @IsString()
    @IsNotEmpty()
    email: string;
    @IsStrongPassword()
    @IsString()
    @IsNotEmpty()
    password:string;
   constructor(username: string, email: string, password: string){
    this.username = username;
    this.email = email;
    this.password = password;
   }
}