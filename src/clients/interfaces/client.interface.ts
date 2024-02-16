
import { Document } from 'mongoose';

export interface Client extends Document {
  name: string;
  role: string;
  contactInfo: string;
}
