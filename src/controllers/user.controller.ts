import { Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Post, Put, ValidationPipe } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { userModel } from "src/models/user.model"
import { userSchema } from "src/schemas/user.schema"
import { Repository } from "typeorm"

@Controller('/medico')
export class userController{
    constructor(@InjectRepository(userModel) private model: Repository<userModel>){}

    @Post()
    public async create(
    @Body() body: userSchema): 
    Promise<userModel>  {
        const userCreated = await this.model.save(body);
        return  userCreated
    };

    @Get(':id')
    public  async getOne(
    @Param('id', ParseIntPipe) id: number): 
    Promise<userModel> {
        const user = await this.model.findOne({ where: { id }})

        if (!user) {
            throw new NotFoundException(`Não achei o médico com o id ${ id }`)
        }

        return user 
    }

    @Get()
    public async getAll(): 
    Promise<userModel[]> {
        return this.model.find()
    }

    @Put(':id')
    public async update(
     @Param('id', ParseIntPipe) id: number,
     @Body() body: userSchema
    ): 
    Promise<userModel> {
        const user = await this.model.findOne({ where: { id }})

        if (!user) {
            throw new NotFoundException(`Não achei o médico com o id ${ id }`)
        }

        await this.model.update({ id }, body)

        return this.model.findOne({ where: { id }})
    }
   

    @Delete(':id')
    public async delete(
    @Param('id', ParseIntPipe) id: number): 
    Promise<string>  {

        const user = await this.model.findOne({ where: { id }})

        if (!user) {
            throw new NotFoundException(`Não achei o médico com o id ${ id }`)
        }

        await this.model.delete( id )

        return "Medico deletado"
    }
    }