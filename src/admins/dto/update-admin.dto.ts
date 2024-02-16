// import { IsString, IsEmail, IsNotEmpty } from 'class-validator';

// export class AdminRegisterDto {
//   @IsNotEmpty()
//   @IsString()
//   name: string;

//   @IsNotEmpty()
//   @IsEmail()
//   email: string;

//   @IsNotEmpty()
//   @IsString()
//   password: string;
// }

// admins/dto/update-admin.dto.ts
import { IsString, IsEmail } from "class-validator";

export class UpdateAdminDto {
  @IsString()
  name?: string;

  @IsEmail()
  email?: string;

  @IsString()
  contactInfo?: string;
}
