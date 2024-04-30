import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { UserService } from '../../user/user.service';
import { Payload } from '../../../utils/const/types';

@Injectable()
export class AccessTokenStrategy extends PassportStrategy(Strategy) {
  constructor(private userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_ACCESS_SECRET,
    });
  }
  //TODO: implement strategy

  // async validate(payload: Payload): Promise<Payload> {
  //   const { sub: id } = payload;
  //   await this.userService.getUser(id);

  //   return { id };
  // }
}
