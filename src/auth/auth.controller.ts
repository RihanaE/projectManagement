
import { Controller, Post, Body, UseGuards, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AdminRegisterDto } from './dto/admin-register.dto';
import { AdminLoginDto } from './dto/admin-login.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() adminRegisterDto: AdminRegisterDto) {
    return this.authService.register(adminRegisterDto);
  }

  @Post('login')
  async login(@Body() adminLoginDto: AdminLoginDto) {
    return this.authService.login(adminLoginDto);
  }

  @UseGuards(JwtAuthGuard)
  @Post('profile')
  async profile(@Req() req) {
    return req.user;
  }
}
