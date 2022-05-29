import {Cat} from "../entity/cat";
import {request, Request, response, Response} from "express";
import { ICreateCat } from '../interfaces/cat.interface'
import { AppDataSource } from '../db'

const CatRepository = AppDataSource.getRepository(Cat);

export class CatService {
    constructor() {}

    async getCatsService():Promise<any> {
        try {
            const getCats = await CatRepository.find();
            return getCats;
        } catch (error) {
            throw error;
        }
    };

    async getCatService(id: any):Promise<any> {
        try {
            const getCat = await CatRepository.findOneBy({id: parseInt(id)});
            return getCat;
        } catch (error) {
            throw error;
        }
    };

    async createCatsService(data: ICreateCat[]):Promise<any> {
        try {
            const created = await CatRepository.save(data)
            return created;
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
                else
                    return {msg:"Gato no encontrado"};
        
            } catch (error) {
                throw error
            }
        };

    async deleteCatService(id: any):Promise<any>{
        try {               
            const deleteCat = await CatRepository.delete({id: parseInt(id)})
            return deleteCat;
        } catch (error) {
            throw error
        }
    };
}