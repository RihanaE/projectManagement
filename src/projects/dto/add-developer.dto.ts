import { IsString, IsNotEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class AddDeveloperDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  developerId: string;
}
