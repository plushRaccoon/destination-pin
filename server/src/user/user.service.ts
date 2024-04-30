import {
  Injectable,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/model/user.entity';
import { DataSource, Repository } from 'typeorm';
import { UserSignUpDto } from './dto/user.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UserService {
  constructor(
    private dataSource: DataSource,
    @InjectRepository(User) private readonly userRepo: Repository<User>,
  ) { }

  async getUserByEmail(email: string) {
    const user = await this.userRepo.findOneByOrFail({ email });
    console.log('user', user)

    return user;
  }

  async createUser(data: UserSignUpDto) {
    const user = this.userRepo.create({
      ...data,
      id: uuidv4(),
    });

    await this.userRepo.save(user);

    return user;
  }
}

