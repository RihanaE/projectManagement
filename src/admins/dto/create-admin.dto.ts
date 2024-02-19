import { ApiProperty } from "@nestjs/swagger";

export class CreateAdminDto {
  @ApiProperty()
  readonly name: string;

  @ApiProperty()
  readonly email: string;

  @ApiProperty()
  readonly password: string;

  @ApiProperty()
  readonly contactInfo: string;
}
