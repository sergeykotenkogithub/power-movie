import { IsString, MinLength, IsEmail } from 'class-validator'

export class AuthDto {
  @IsEmail()
  email: string

  @MinLength(6, {
    message: 'Password cannot be less than 6 symbol',
  })
  @IsString()
  password: string
}
