import {Cat} from "../entity/cat";
import {request, Request, response, Response} from "express";
import { ICreateCat } from '../interfaces/cat.interface'
import { AppDataSource } from '../db'
import { getRepository } from "typeorm";

export const getCatsService = async () =>{
    try {
        const CatRepository = AppDataSource.getRepository(Cat)
        const getCats = await CatRepository.find()
        return getCats;
    } catch (error) {
        throw error
    }
}

export const getCatService = async (req: Request, res: Response) =>{
    try {
        const { id } = req.params;
        const CatRepository = AppDataSource.getRepository(Cat)
        const getCat = await CatRepository.findOneBy({id: parseInt(id)})
        return getCat;
    } catch (error) {
        throw error
    }
}

export const createCatsService = async (data: ICreateCat[]) => {
    try {
        const CatRepository = AppDataSource.getRepository(Cat)
        const created = await CatRepository.save(data)
        return created;
    } catch (error) {
        throw error
    }
};

export const updateCatService = async (req: Request, res: Response) =>{
    try {
        const { id } = req.params;
        const CatRepository = AppDataSource.getRepository(Cat);
        const cat: any = await CatRepository.findOneBy({id: parseInt(id)});
        AppDataSource.getRepository(Cat).merge(cat, req.body);
        const updateCat = await AppDataSource.getRepository(Cat).save(cat)
        return updateCat;
    } catch (error) {
        throw error
    }
};


export const deleteCatService = async (req: Request, res: Response) =>{
    try {
        const { id } = req.params;
        const CatRepository = AppDataSource.getRepository(Cat)
        const deleteCat = await CatRepository.delete({id: parseInt(id)})
        return deleteCat;
    } catch (error) {
        throw error
    }
};
