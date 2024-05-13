/* eslint-disable prettier/prettier */
import { Controller} from '@nestjs/common';
import { UserService } from './user.service';
import { } from './dto/create-user.dto';


@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  

}

