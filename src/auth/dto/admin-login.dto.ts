// auth/dto/admin-login.dto.ts
import { IsString, IsEmail, IsNotEmpty } from 'class-validator';
import {ApiProperty} from '@nestjs/swagger';

export class AdminLoginDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  password: string;
}
