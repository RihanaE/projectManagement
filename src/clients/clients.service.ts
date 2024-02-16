// clients/clients.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Client } from './interfaces/client.interface';
import { CreateClientDto } from './dto/create-client.dto';

@Injectable()
export class ClientsService {
  constructor(@InjectModel('Client') private readonly clientModel: Model<Client>) {}

  async findAll(): Promise<Client[]> {
    return this.clientModel.find().exec();
  }

  async create(createClientDto: CreateClientDto): Promise<Client> {
    const createdClient = new this.clientModel(createClientDto);
    return createdClient.save();
  }
}
