import { UsersService } from './users.service';
import { Body, Controller, Get, Param, Post, UsePipes } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user-dto';
import { ValidationPipe } from 'src/pipes/validation.pipe';

@Controller('users')
export class UsersController {

    constructor (private usersService: UsersService) {

    }
    @UsePipes(ValidationPipe)
    @Post()
    create (@Body() userDto: CreateUserDto) {
        return this.usersService.createUser(userDto)
    }

    @Get()
    getAll () {
        return this.usersService.getAllUsers()
    }

    @Get(':id')
    getOne (@Param('id') id: number) {
        return this.usersService.getOneUser(id)
    }
}
