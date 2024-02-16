// projects/projects.controller.ts
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
import { ProjectsService } from "./projects.service";
import { CreateProjectDto } from "./dto/create-project.dto";
import { UpdateProgressDto } from "./dto/update-progress.dto";
import { AddDeveloperDto } from "./dto/add-developer.dto";
import { RemoveDeveloperDto } from "./dto/remove-developer.dto";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";

@Controller("projects")
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.projectsService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.projectsService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createProjectDto: CreateProjectDto) {
    return this.projectsService.create(createProjectDto);
  }

  @UseGuards(JwtAuthGuard)
  @Put(":id/progress")
  updateProgress(
    @Param("id") id: string,
    @Body() updateProgressDto: UpdateProgressDto
  ) {
    return this.projectsService.updateProgress(id, updateProgressDto);
  }

  @UseGuards(JwtAuthGuard)
  @Put(":id/add-developer")
  addDeveloper(
    @Param("id") id: string,
    @Body() addDeveloperDto: AddDeveloperDto
  ) {
    return this.projectsService.addDeveloper(id, addDeveloperDto);
  }

  @UseGuards(JwtAuthGuard)
  @Put(":id/remove-developer")
  removeDeveloper(
    @Param("id") id: string,
    @Body() removeDeveloperDto: RemoveDeveloperDto
  ) {
    return this.projectsService.removeDeveloper(id, removeDeveloperDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.projectsService.remove(id);
  }
}
