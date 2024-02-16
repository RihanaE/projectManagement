// projects/dto/add-developer.dto.ts
import { IsString, IsNotEmpty } from 'class-validator';

export class AddDeveloperDto {
  @IsNotEmpty()
  @IsString()
  developerId: string;
}
