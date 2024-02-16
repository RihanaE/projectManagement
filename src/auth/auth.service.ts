// auth/auth.service.ts
import { Injectable, ConflictException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { AdminsService } from "../admins/admins.service";
import { CreateAdminDto } from "../admins/dto/create-admin.dto";
import { AdminLoginDto } from "./dto/admin-login.dto";

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly adminsService: AdminsService
  ) {}

  async validateUser(payload: any): Promise<any> {
    const user = await this.adminsService.getAdminById(payload.sub);
    return user || null;
  }

  async login(adminUser: AdminLoginDto): Promise<any> {
    let user = await this.adminsService.checkCredentials(
      adminUser.email,
      adminUser.password
    );

    if (!user) {
      throw new ConflictException("Invalid credentials");
    }

    const payload = { sub: user.id, username: user.name };
    return {
      message: "Admin logined successfully",
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(createAdminDto: CreateAdminDto): Promise<any> {
    console.log(createAdminDto);
    console.log("Registering admin");
    // Check if the email is already registered
    const existingAdmin = await this.adminsService.getAdminByEmail(
      createAdminDto.email
    );
    if (existingAdmin) {
      throw new ConflictException("Email is already registered");
    }

    // Create a new admin
    const newAdmin = await this.adminsService.create(createAdminDto);

    // You can customize the response based on your needs
    return {
      message: "Admin registered successfully",
      admin: newAdmin,
    };
  }
}
