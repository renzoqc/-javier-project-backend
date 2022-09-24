import { Cat } from "src/entity/cat"

export interface ICreateCat {
    name: string,
    size: number,
    house: string,
    owner: string
}

export interface IResponseCat {
    message: string,
    content: Cat[],
    extra: string
}

export interface IResponseCatNull {
    message: string,
    content: null,
    extra: string
}

export interface IGetErrorMessage {
    msg:string
}

export interface IResponseController{
    message:string,
    content:Cat[]
}

export interface IServiceDelete{
    raw:[],
    affected: number
}

export interface GetCatsInterface {
    message: string,
    content: Cat[],
    extra: string
}
  
export interface ObjectCatInterface {
    message: string,
    content: Cat,
    extra: string
}
  
export interface DeleteCatInterface{
    message: string,
    content: null,
    extra: string
}
  