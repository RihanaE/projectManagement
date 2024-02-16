// developers/dto/create-developer.dto.ts
import { IsString, IsEmail, IsNotEmpty } from 'class-validator';

export class CreateDeveloperDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  role: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
