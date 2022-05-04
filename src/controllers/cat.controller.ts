import { Request, Response } from "express";
import { getCatsService, createCatsService } from "../providers/cat.service"

export const getCatsController = async (req: Request, res: Response):Promise<any> =>{
  try{
    const getCats = await getCatsService();
    return res.json({
      msg: "Se obtuvo todos los gatos"
    })
  }catch(error){
    return res.status(500).json({ message: error.message });
  }
}

export const createCatController = async (req: Request, res: Response):Promise<any> => {
  try {
    const createdCat = await createCatsService(req.body);
    return res.json({
      msg: "Se creo gato"
    })
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
