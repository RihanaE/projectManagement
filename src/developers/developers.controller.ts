// developers/developers.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  UseGuards,
} from "@nestjs/common";
import { DevelopersService } from "./developers.service";
import { CreateDeveloperDto } from "./dto/create-developer.dto";
import { UpdateDeveloperDto } from "./dto/update-developer.dto";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";

@Controller("developers")
export class DevelopersController {
  constructor(private readonly developersService: DevelopersService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.developersService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.developersService.findOne(id);
  }

  @Post()
  create(@Body() createDeveloperDto: CreateDeveloperDto) {
    return this.developersService.create(createDeveloperDto);
  }

  @UseGuards(JwtAuthGuard)
  @Put(":id")
  update(
    @Param("id") id: string,
    @Body() updateDeveloperDto: UpdateDeveloperDto
  ) {
    return this.developersService.update(id, updateDeveloperDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.developersService.remove(id);
  }
}
