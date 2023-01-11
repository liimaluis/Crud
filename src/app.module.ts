import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { userModule } from './modules/user.module';

@Module({
  imports: [userModule, TypeOrmModule.forRoot({
    type: "sqlite",
    database: "./db.sql",

    entities: ["dist/**/*.model.js"],

    synchronize: true,
  })],
  
})
export class AppModule {}
