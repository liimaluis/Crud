import { IsInt, IsNumber, IsString, MaxLength } from "class-validator";

export class userSchema {
    @IsString()
    @MaxLength(120)
    name: string;

    @IsNumber()
    telefonefixo: number;
    
    @IsNumber()
    telefonecel:number;

    @IsNumber()
    cep: number

    @IsString()
    @MaxLength(255)
    area: string
}