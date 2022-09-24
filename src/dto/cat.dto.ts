import { IsNotEmpty, IsString } from 'class-validator'

export class CatDto {
    @IsString()
    @IsNotEmpty()
    name: string

    @IsString()
    size: number

    @IsString()
    house: string

    @IsString()
    owner: string
}
