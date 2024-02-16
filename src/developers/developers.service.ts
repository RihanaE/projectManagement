// developers/developers.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Developer } from './interface/developer.interface';
import { CreateDeveloperDto } from './dto/create-developer.dto';

@Injectable()
export class DevelopersService {
  constructor(@InjectModel('Developer') private readonly developerModel: Model<Developer>) {}

  async findAll(): Promise<Developer[]> {
    return this.developerModel.find().exec();
  }

  async findOne(id: string): Promise<Developer> {
    return this.developerModel.findById(id).exec();
  }

  async create(createDeveloperDto: CreateDeveloperDto): Promise<Developer> {
    const createdDeveloper = new this.developerModel(createDeveloperDto);
    return createdDeveloper.save();
  }

  async update(id: string, updateDeveloperDto: any): Promise<Developer> {
    return this.developerModel.findByIdAndUpdate(id, updateDeveloperDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Developer> {
    return this.developerModel.findByIdAndDelete(id).exec();
  }

  async removeProjectFromDeveloper(developerId: string, projectId: string): Promise<Developer> {
   
    return this.developerModel.findByIdAndUpdate(
      developerId,
      { $pull: { projects: projectId } },
      { new: true },
    ).exec();
  }
}
