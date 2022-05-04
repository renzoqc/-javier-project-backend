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

export const createCatsService = async (data: ICreateCat[]) => {
    try {
        const CatRepository = AppDataSource.getRepository(Cat)
        const created = await CatRepository.save(data)
        return created;
    } catch (error) {
        throw error
    }
};
