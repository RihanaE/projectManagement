import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Project } from './interface/project.interface';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProgressDto } from './dto/update-progress.dto';
import { AddDeveloperDto } from './dto/add-developer.dto';
import { RemoveDeveloperDto } from './dto/remove-developer.dto';

@Injectable()
export class ProjectsService {
  constructor(@InjectModel('Project') private readonly projectModel: Model<Project>) {}

  async findAll(): Promise<Project[]> {
    return this.projectModel.find().populate('developers').exec();
  }

  async findOne(id: string): Promise<Project> {
    return this.projectModel.findById(id).populate('developers').exec();
  }

  async create(createProjectDto: CreateProjectDto): Promise<Project> {
    const createdProject = new this.projectModel(createProjectDto);
    return createdProject.save();
  }

  async updateProgress(id: string, updateProgressDto: UpdateProgressDto): Promise<Project> {
    return this.projectModel.findByIdAndUpdate(id, { progress: updateProgressDto.progress }, { new: true }).exec();
  }

  async addDeveloper(id: string, addDeveloperDto: AddDeveloperDto): Promise<Project> {
    return this.projectModel.findByIdAndUpdate(
      id,
      { $push: { developers: addDeveloperDto.developerId } },
      { new: true },
    ).populate('developers').exec();
  }

  async removeDeveloper(id: string, removeDeveloperDto: RemoveDeveloperDto): Promise<Project> {
    return this.projectModel.findByIdAndUpdate(
      id,
      { $pull: { developers: removeDeveloperDto.developerId } },
      { new: true },
    ).populate('developers').exec();
  }

  async remove(id: string): Promise<Project> {
    return this.projectModel.findByIdAndDelete(id).exec();
  }
}

