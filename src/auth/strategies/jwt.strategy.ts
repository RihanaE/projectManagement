import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { AuthService } from "../auth.service";
import { JwtPayload } from "../interfaces/jwt-payload.interface";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: "abc123", // Replace with your secret key
    });
  }

  async validate(payload: JwtPayload) {
    const user = await this.authService.validateUser(payload);
    console.log(user);
    console.log("payload " + payload.sub);
    if (!user) {
      return false;
    }
    return user;
  }
}
