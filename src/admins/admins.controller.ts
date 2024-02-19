// admins/admins.controller.ts
import { Controller, Get, Put, UseGuards, Body } from "@nestjs/common";
import { Param } from "@nestjs/common/decorators";
import { AdminsService } from "./admins.service";
import { UpdateAdminDto } from "./dto/update-admin.dto";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("Admin")
@Controller("admins")
export class AdminsController {
  constructor(private readonly adminsService: AdminsService) {}

  @UseGuards(JwtAuthGuard)
  @Get("profile/:id")
  profile(@Param("id") id: string) {
    return this.adminsService.getProfile(id);
  }

  @UseGuards(JwtAuthGuard)
  @Put("profile/:id")
  updateProfile(
    @Param("id") id: string,
    @Body() updateAdminDto: UpdateAdminDto
  ) {
    return this.adminsService.updateProfile(id, updateAdminDto);
  }
}
