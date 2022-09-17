import {Cat} from "../entity/cat";
import {Request, Response} from "express";
import {ICreateCat, IGetErrorMessage} from '../interfaces/cat.interface'
import {AppDataSource} from '../db'
import { CatDto } from "src/dto/cat.dto";

const CatRepository = AppDataSource.getRepository(Cat);

export class CatService {
    constructor() {}

    async getCatsService():Promise<Cat[]> {
        try {
            return await CatRepository.find();
        } catch (error) {
            throw error;
        }
    };

    async getCatService(id: string):Promise<Cat | IGetErrorMessage> {
        try {
            const getCat:Cat | null = await CatRepository.findOneBy({id: parseInt(id)});

            if(getCat){
                return getCat
            }
            return {msg: "Gato no encontrado"}
        } catch (error) {
            throw error;
        }
    };

    async createCatsService(data: ICreateCat[]):Promise<Cat[]> {
        try {
            return await CatRepository.save(data);
        } catch (error) {
            throw error;
        }
    };

    async updateCatService(id: string, payload: CatDto):Promise<Cat | null>{
        try {
            const updateCat: Cat | null = await CatRepository.findOneBy({id: parseInt(id)});

            if(updateCat) {
                CatRepository.merge(updateCat, payload);
                return await CatRepository.save(updateCat)
            }
            return null;
        } catch (error) {
            throw error
        }
    };

    async deleteCatService(id: string):Promise<true | false>{
        try {
            const deletedCat = await CatRepository.delete({id: parseInt(id)})

            if(deletedCat.affected === 0){
                return false
            }
            return true;
        } catch (error) {
            throw error
        }
    };
}