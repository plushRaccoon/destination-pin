import { IsEmail, IsNotEmpty, IsString, Matches } from "class-validator";
import { nameRegExp, nameRegExpMessage, passwordRegExp, passwordRegExpMessage } from "utils/const/regExes";
import { Session } from "src/model/session.entity";

export class UserDto {
  id: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @Matches(passwordRegExp, { message: `Password ${passwordRegExpMessage}` })
  password: string;

  @IsString()
  @IsNotEmpty()
  @Matches(nameRegExp, { message: `First name ${nameRegExpMessage}` })
  firstName: string;

  @IsString()
  @IsNotEmpty()
  @Matches(nameRegExp, { message: `Last name ${nameRegExpMessage}` })
  lastName: string;

  createdAt: Date;
  updatedAt: Date;
  sessions: Session[];
}

export class UserSignUpDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @Matches(passwordRegExp, { message: `Password ${passwordRegExpMessage}` })
  password: string;

  @IsString()
  @IsNotEmpty()
  @Matches(nameRegExp, { message: `First name ${nameRegExpMessage}` })
  firstName: string;

  @IsString()
  @IsNotEmpty()
  @Matches(nameRegExp, { message: `Last name ${nameRegExpMessage}` })
  lastName: string;
}
