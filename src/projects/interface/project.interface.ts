// projects/interfaces/project.interface.ts
import { Document } from 'mongoose';
import { Developer } from '../../developers/interface/developer.interface';

export interface Project extends Document {
  name: string;
  clientName: string;
  startDate: Date;
  endDate: Date;
  progress: number;
  developers: Developer[];
}
