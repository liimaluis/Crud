import { Controller, Delete, Get, Post, Put } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { userModel } from "src/models/user.model"
import { Repository } from "typeorm"

@Controller('/medico')
export class userController{
    constructor(@InjectRepository(userModel) private model: Repository<userModel>){}

    @Post()
    public create(): any {
        return { data: 'Create !'}
    }

    @Get(':id')
    public getOne(): any {
        return { data: 'Create !'}
    }

    @Get()
    public async getAll(): Promise<{data: userModel[]}> {
        const list = await this.model.find();
        return {data: list}
    }

    @Put(':id')
    public update(): any {
        return { data: 'Create !'}
    }

    @Delete(':id')
    public delete(): any {
        return { data: 'Create !'}
    }

}