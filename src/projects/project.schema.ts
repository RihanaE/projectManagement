// projects/project.schema.ts
import { Schema, Prop, SchemaFactory, SchemaOptions } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Developer } from '../developers/developer.schema';

@Schema()
export class Project extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  clientName: string;

  @Prop({ required: true })
  startDate: Date;

  @Prop({ required: true })
  endDate: Date;

  @Prop({ default: 0 })
  progress: number;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Developer' }] })
  developers: Developer[];
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
