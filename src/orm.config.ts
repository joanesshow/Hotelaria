import {TypeOrmModuleOptions} from '@nestjs/typeorm';
import {TypeOrmModule} from '@nestjs/typeorm';


export const config: TypeOrmModuleOptions = {
    type:'postgres',
    username: 'postgres',
    password:'1234',
    port: 5432,
    host: 'localhost',
    database:'Hotelaria',
    synchronize: true,
    entities:['dist/**/*.entity{.ts,.js}']
}
