import {
  Controller,
  UseGuards,
  Req,
  Body,
  Post,
} from '@nestjs/common';
import { LocalAuthGuard } from './passportStrategies/local-auth.guard';
import { Public } from './passportStrategies/publicAccess.decorator';
import { AuthenticationService } from './authentication.service';
import { Tokens } from '../../utils/const/types';
import { SignInDto } from './dto/signIn.dto';


@Controller('auth')
export class AuthenticationController {
  constructor(
    private authService: AuthenticationService,
  ) { }

  @Post('/')
  @UseGuards(LocalAuthGuard)
  @Public()
  async signIn(@Req() req, @Body() body: SignInDto): Promise<Tokens> {
    const { user } = req;
    const { id } = user;

    const tokens = this.authService.generateAccessAndRefreshTokens(user);
    await this.authService.saveUserSession(id, tokens);

    return tokens;
  }
}
