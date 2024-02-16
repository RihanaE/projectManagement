import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { JwtModule } from "@nestjs/jwt";
import { JwtStrategy } from "./strategies/jwt.strategy";
import { AdminsService } from "src/admins/admins.service";
import { AdminsModule } from "src/admins/admins.module";

@Module({
  imports: [
    JwtModule.register({
      secret: "abc123", // Replace with your actual secret key
    }),
    AdminsModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService], // Export the AuthService if it needs to be used in other modules
})
export class AuthModule {}
