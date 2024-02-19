import { IsString, IsEmail } from "class-validator";

export class UpdateAdminDto {
  @IsString()
  name?: string;

  @IsEmail()
  email?: string;

  @IsString()
  contactInfo?: string;
}
