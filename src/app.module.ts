import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { userModule } from './modules/user.module';

@Module({
  imports: [userModule, TypeOrmModule.forRoot()],
  
})
export class AppModule {}
