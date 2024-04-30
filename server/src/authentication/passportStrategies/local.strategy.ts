import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { ForbiddenException, Injectable } from '@nestjs/common';
import { UserService } from '../../user/user.service';
import { compareHashWithInput } from '../../../utils/compareHashWithInput';
import { Payload } from '../../../utils/const/types';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private userService: UserService) {
    super({ usernameField: 'email' });
  }

  async validate(email: string, password: string): Promise<Payload> {
    const user = await this.userService.getUserByEmail(email);

    const isValidPassword = compareHashWithInput(user.password, password);

    if (!isValidPassword) {
      throw new ForbiddenException();
    }

    const { id } = user;

    return {
      sub: id,
    };
  }
}
