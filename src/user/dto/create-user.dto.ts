import {
  IsAlphanumeric,
  IsEmail,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsString,
  Matches,
  MinLength
} from 'class-validator';

const passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,20}$/;

export class CreateUserDto {
  @IsString()
  @MinLength(2, { message: 'Name must have at least 2 characters.'})
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @MinLength(3, { message: 'Username must have at least 3 characters.'})
  @IsAlphanumeric(null, { message: 'User does not allow other than alpha numberic chars.',})
  username: string;

  @IsNotEmpty()
  @IsEmail(null, { message: 'Please provide valid email.',})
  email: string

  @IsInt()
  age: number;

  @IsString()
  @IsEnum(['f', 'm', 'u'])
  gender: string

  @IsNotEmpty()
  @Matches(passwordRegEx, {
    message: 'Password must contain Minimum 8 and maximum 20 characters, at least one uppercase letter, one lowercase letter, one number and one special character'
  })
  password: string;
}