import { IsString } from "class-validator";

export class userSchema {
    @IsString()
    name: string;

    telefonefixo: number;
    
    telefonecel:number;

    cep: number

    @IsString()
    area: string
}