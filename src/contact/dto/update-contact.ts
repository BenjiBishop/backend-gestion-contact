import {  IsString, IsNotEmpty, IsNumber } from 'class-validator'


export class UptadeContact {
    
    @IsNotEmpty()
    @IsString()
    readonly nom : string;

    @IsNotEmpty()
    @IsString()
    readonly prenom : string;

    @IsNotEmpty()
    @IsString()
    readonly email : string;


    @IsNotEmpty()
    @IsString()
    readonly numero : String
}