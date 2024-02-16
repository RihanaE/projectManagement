// projects/dto/remove-developer.dto.ts
import { IsString, IsNotEmpty } from 'class-validator';

export class RemoveDeveloperDto {
  @IsNotEmpty()
  @IsString()
  developerId: string;
}
