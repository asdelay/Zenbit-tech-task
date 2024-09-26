import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user-dto';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    create(userDto: CreateUserDto): Promise<import("./users.model").User>;
    getAll(): Promise<import("./users.model").User[]>;
    getOne(id: number): Promise<import("./users.model").User | 0>;
}
