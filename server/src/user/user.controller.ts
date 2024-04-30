import {
  Controller,
  Post,
  Body,
  HttpException,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserSignUpDto } from './dto/user.dto';
import { Public } from 'src/authentication/passportStrategies/publicAccess.decorator';
import { generateHashPassword } from 'utils/generateHashPassword';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
  ) {}

  @Post('/')
  @Public()
  async createUser(@Body() data: UserSignUpDto) {
    const { password } = data;

    const hashedPassword = await generateHashPassword(password)
    
    try {
      const newUser = await this.userService.createUser({...data, password: hashedPassword});

      return newUser;
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }
}
