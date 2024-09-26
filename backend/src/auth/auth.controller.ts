import { Body, Controller, Inject, Post, UsePipes } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user-dto';
import { AuthService } from './auth.service';
import { ValidationPipe } from 'src/pipes/validation.pipe';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService){}
    
    @UsePipes(ValidationPipe)
    @Post('/login')
    login (@Body() dto: CreateUserDto) {
        return this.authService.login(dto)
    }

    @UsePipes(ValidationPipe)
    @Post('/registration')
    registration (@Body() dto: CreateUserDto) {
        return this.authService.registration(dto)
    }
}
