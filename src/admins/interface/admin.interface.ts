import { Document } from "mongoose";

export interface Admin extends Document {
  name: string;
  role: string;
  contactInfo: string;
  email: string;
  password: string;
}
