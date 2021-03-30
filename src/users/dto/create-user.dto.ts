import { IsNumber, IsString } from "class-validator"

export class CreateUserDto {
   @IsString()
   readonly first_name:string

   @IsString()
   readonly last_name:string

   @IsNumber()
   readonly age:number
}
