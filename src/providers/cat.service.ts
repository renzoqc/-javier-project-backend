import {Cat} from "../entity/cat";
import {Request, Response} from "express";
import {ICreateCat} from '../interfaces/cat.interface'
import {AppDataSource} from '../db'

const CatRepository = AppDataSource.getRepository(Cat);

export class CatService {
    constructor() {}

    async getCatsService():Promise<any> {
        try {
            return await CatRepository.find();
        } catch (error) {
            throw error;
        }
    };

    async getCatService(id: any):Promise<any> {
        try {
            return await CatRepository.findOneBy({id: parseInt(id)});
        } catch (error) {
            throw error;
        }
    };

    async createCatsService(data: ICreateCat[]):Promise<any> {
        try {
            return await CatRepository.save(data);
        } catch (error) {
            throw error;
        }
    };

    async updateCatService(req: Request, res: Response):Promise<any>{
        try {
            const cat = await CatRepository.findOneBy({id: parseInt(req.params.id)});

            if(cat) {
                CatRepository.merge(cat, req.body);
                const updateCat = await AppDataSource.getRepository(Cat).save(cat)
                return updateCat;
            }
            return null;
        } catch (error) {
            throw error
        }
    };

    async deleteCatService(id: any):Promise<any>{
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