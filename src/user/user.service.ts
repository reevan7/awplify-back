import { Injectable } from '@nestjs/common';
import { User } from 'src/Model/user.model';

@Injectable()
export class UserService {

async findAll():Promise<User[]>{
    return [
        {
            userId: 1,
            firstname: 'John',
            lastname: 'Doe',
            email: 'John.doe@email.com'
        },
        {
            userId: 2,
            firstname: 'Jane',
            lastname: 'Does',
            email: 'jane.does@email.com'
        }

    ]
}


}
