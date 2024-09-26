import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto {
    @IsString({message: "Has to be a string"})
    @IsEmail({},{message: "Incorrect email"})
    readonly email: string;

    @IsString({message: "Has to be a string"})
    @Length(4,24,{message: "Should contain more than 4 and less than 24 symbols"})
    readonly password: string;
}