import { IsNotEmpty, IsEmail, Matches } from 'class-validator';
import { passwordRegExp, passwordRegExpMessage } from 'utils/const/regExes';

export class SignInDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @Matches(passwordRegExp, { message: `Password ${passwordRegExpMessage}` })
  password: string;

}
