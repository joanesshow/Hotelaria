import {TypeOrmModuleOptions} from '@nestjs/typeorm';
import {TypeOrmModule} from '@nestjs/typeorm';


export const config: TypeOrmModuleOptions = {
    type:'postgres',
    username: 'postgres',
    password:'1234',
    port: 5432,
    host: '127.0.0.1',
    database:'Hotelaria',
    synchronize: true,
    entities:['dist/**/*.entity{.ts,.js}']
}
