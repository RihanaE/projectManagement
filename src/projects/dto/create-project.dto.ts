// projects/dto/create-project.dto.ts
import { IsString, IsNotEmpty, IsDateString, IsEmail } from 'class-validator';

export class CreateProjectDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  clientName: string;

  @IsDateString()
  startDate: Date;

  @IsDateString()
  endDate: Date;
}
