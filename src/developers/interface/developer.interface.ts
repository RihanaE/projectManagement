// developers/interfaces/developer.interface.ts
import { Document } from 'mongoose';

export interface Developer extends Document {
  name: string;
  role: string;
  contactInfo: string;
  email: string;
  password: string;
}
