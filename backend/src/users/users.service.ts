import { Injectable } from '@nestjs/common';
import { User } from './users.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user-dto';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User) private userRepository: typeof User) {}

    async createUser (dto: CreateUserDto) {
        const user = await this.userRepository.create(dto)
        return user;
    }

    async getAllUsers () {
        const users = await this.userRepository.findAll()
        return users
    }

    async getOneUser (id: number) {
        const user = await this.userRepository.findByPk(id)
        if(!user) {
            console.log("error user not found")
            return 0
        }
        return user
    }

    async getUserByEmail (email: string) {
        const user = await this.userRepository.findOne({where: {email}, include: {all: true}})
        return user
    }

}
