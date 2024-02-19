import { IsString, IsNotEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class RemoveDeveloperDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  developerId: string;
}
