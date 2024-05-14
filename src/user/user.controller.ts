import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/CreateUser.Dto';

@Controller('user')
export class UserController {

    constructor(private usersService: UserService){}

    @Get()
    getAllUsers(){
        return this.usersService.getAllUser()
    }

    // create a post
    @Post('/create-post')
    createUser(@Body() createUserDto:CreateUserDto){
        console.log(createUserDto);
        return this.usersService.createUser(createUserDto)
    }
}
