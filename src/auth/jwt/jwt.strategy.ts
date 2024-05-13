/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { authConstants } from "src/common/constants";

@Injectable()
export class JWTStrategy extends PassportStrategy(Strategy) {
    
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: authConstants.secret,
        });
    }

    async validate(payload: any) {
        return {useId: payload.sub, email: payload.email}
    }
}