// developers/developers.module.ts
import { Module } from '@nestjs/common';
import { DevelopersController } from './developers.controller';
import { DevelopersService } from './developers.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Developer, DeveloperSchema } from './developer.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Developer.name, schema: DeveloperSchema }]),

  ],
  controllers: [DevelopersController],
  providers: [DevelopersService],
})
export class DevelopersModule {}
