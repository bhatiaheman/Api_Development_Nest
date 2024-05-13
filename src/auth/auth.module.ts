/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { authConstants } from 'src/common/constants';
import { PassportModule } from '@nestjs/passport';
import { JWTStrategy } from './jwt/jwt.strategy';

@Module({
  imports: [UserModule,PassportModule, JwtModule.register({secret: authConstants.secret, signOptions:{expiresIn:'1d'}})],
  controllers: [AuthController],
  providers: [AuthService, JWTStrategy],
  exports: [AuthService]
})
export class AuthModule {}
