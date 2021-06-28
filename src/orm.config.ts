import {TypeOrmModuleOptions} from '@nestjs/typeorm';
import {TypeOrmModule} from '@nestjs/typeorm';

import { createConnection } from 'net';



export const config: TypeOrmModuleOptions = {
    type:'postgres',
    username: 'root',
    password:'1234',
    port: 5432,
    host: 'localhost',
    database:'hotelaria',
    synchronize: true,
    entities:['dist/**/*.entity{.ts,.js}']
}
