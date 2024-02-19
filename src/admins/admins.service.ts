// admins/admins.service.ts
import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Admin } from "./interface/admin.interface";
import { UpdateAdminDto } from "./dto/update-admin.dto";
import { CreateAdminDto } from "./dto/create-admin.dto";

@Injectable()
export class AdminsService {
  constructor(
    @InjectModel("Admin") private readonly adminModel: Model<Admin>
  ) {}

  async getAdminByEmail(email: string): Promise<Admin | null> {
    return this.adminModel.findOne({ email }).exec();
  }

  async create(createAdminDto: CreateAdminDto): Promise<Admin> {
    const createdAdmin = new this.adminModel({
      ...createAdminDto,
      role: "admin",
    });
    return createdAdmin.save();
  }

  async getProfile(id: String): Promise<Admin> {
   
    const admin = await this.adminModel.findById(id).exec();
    if (!admin) {
      throw new NotFoundException("Admin not found");
    }
    return admin;
  }

  async updateProfile(
    id: String,
    updateAdminDto: UpdateAdminDto
  ): Promise<Admin> {
    const updatedAdmin = await this.adminModel
      .findByIdAndUpdate(id, updateAdminDto, { new: true })
      .exec();
    if (!updatedAdmin) {
      throw new NotFoundException("Admin not found");
    }
    return updatedAdmin;
  }

  async getAdminById(adminId: string): Promise<Admin | null> {
    return this.adminModel.findById(adminId).exec();
  }

  async checkCredentials(
    email: string,
    password: string
  ): Promise<Admin | null> {
    return this.adminModel
      .findOne({
        email,
        password,
      })
      .exec();
  }
}
