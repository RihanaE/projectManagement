// auth/dto/admin-login.dto.ts
import { IsString, IsEmail, IsNotEmpty } from 'class-validator';

export class AdminLoginDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
