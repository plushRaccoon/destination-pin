import {
  Injectable,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import {
  Payload,
  Tokens,
} from '../../utils/const/types';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { Session } from 'src/model/session.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class AuthenticationService {
  constructor(
    private jwtService: JwtService,
    private dataSource: DataSource,
    @InjectRepository(Session) private readonly sessionRepo: Repository<Session>,
  ) {}

  generateAccessAndRefreshTokens(user: Payload): Tokens {
    const payload: Payload = {
      sub: user.sub,
    };
    const accessToken = this.jwtService.sign(payload, {
      secret: process.env.JWT_ACCESS_SECRET,
      expiresIn: process.env.JWT_ACCESS_EXPIRES_IN,
    });
    const refreshToken = this.jwtService.sign(payload, {
      secret: process.env.JWT_REFRESH_SECRET,
      expiresIn: process.env.JWT_REFRESH_EXPIRES_IN,
    });

    return { accessToken, refreshToken };
  }

  async saveUserSession(id: string, tokens: Tokens): Promise<void> {
    await this.sessionRepo.createQueryBuilder('session')
    .insert()
    .values({
      id: uuidv4(),
      accessToken: tokens.accessToken,
      refreshToken: tokens.refreshToken,
      user: { id },
    })
    .execute();
  }
}
