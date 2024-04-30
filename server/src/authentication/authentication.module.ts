import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthenticationController } from './authentication.controller';
import { AuthenticationService } from './authentication.service';
import { LocalStrategy } from './passportStrategies/local.strategy';
import { AccessTokenStrategy } from './passportStrategies/accessToken.strategy';
import { AccessTokenAuthGuard } from './passportStrategies/accessToken-auth.guard';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Session } from 'src/model/session.entity';
import { User } from 'src/model/user.entity';
import { UserService } from 'src/user/user.service';

@Module({
  controllers: [AuthenticationController],
  imports: [
    PassportModule,
    JwtModule.register({}), 
    TypeOrmModule.forFeature([User, Session]),
  ],
  providers: [
    AuthenticationService,
    LocalStrategy,
    AccessTokenStrategy,
    {
      provide: APP_GUARD,
      useClass: AccessTokenAuthGuard,
    },
    UserService,
  ],
  exports: [AuthenticationService],
})
export class AuthenticationModule {}
