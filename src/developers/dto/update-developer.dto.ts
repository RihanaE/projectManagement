// developers/dto/update-developer.dto.ts
import { IsString, IsEmail } from 'class-validator';

export class UpdateDeveloperDto {
  @IsString()
  name?: string;

  @IsString()
  role?: string;

  @IsEmail()
  email?: string;
}
