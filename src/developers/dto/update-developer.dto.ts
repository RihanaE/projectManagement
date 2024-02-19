import { IsString, IsEmail } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateDeveloperDto {
  @ApiProperty()
  @IsString()
  name?: string;

  @ApiProperty()
  @IsString()
  role?: string;

  @ApiProperty()
  @IsEmail()
  email?: string;
}
