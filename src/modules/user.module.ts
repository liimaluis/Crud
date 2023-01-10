import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { userController } from "src/controllers/user.controller";
import { userModel } from "src/models/user.model";


@Module({
    imports: [TypeOrmModule.forFeature([userModel])],
    controllers: [userController],
})
export class userModule {}