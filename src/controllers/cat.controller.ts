import { Request, Response } from "express";
import { getCatsService, createCatsService, getCatService, deleteCatService, updateCatService } from "../providers/cat.service"

export const getCatsController = async (req: Request, res: Response):Promise<any> =>{
  try{
    const getCats = await getCatsService();
    return res.json({
      msg: "Se obtuvo todos los gatos",
      getCats
    })
  }catch(error){
    return res.status(500).json({ message: error.message });
  }
}

export const getCatController = async (req: Request, res: Response):Promise<any> =>{
  try{
    const getCat = await getCatService(req, res);
    return res.json({
      msg: "Se obtuvo gato",
      getCat
    })
  }catch(error){
    return res.status(500).json({ message: error.message });
  }
};

export const createCatsController = async (req: Request, res: Response):Promise<any> => {
  try {
    const createdCat = await createCatsService(req.body);
    return res.json({
      msg: "Se creó gato",
      createdCat
    })
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateCatController = async (req: Request, res: Response):Promise<any> => {
  try {
    const updateCat = await updateCatService(req, res);
    return res.json({
      msg: "Se actualizó gato",
      updateCat
    })
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteCatController = async (req: Request, res: Response):Promise<any> => {
  try {
    const deleteCat = await deleteCatService(req, res);
    return res.json({
      msg: "Se eliminó gato",
      deleteCat
    })
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
