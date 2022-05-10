import { Request, Response } from "express";
import { CatService } from '../providers/cat.service';
import { ApiResponse } from '../response/cat.response'

const Service = new CatService();


export class CatController {
    constructor() {}

    async getCats(req: Request, res: Response):Promise<any> {
      try{
        const getCats = await Service.getCatsService();
        const response = ApiResponse("Se obtuvieron gatos", getCats);
        return res.json(response)
      } catch(error) {
        return res.status(500).json({ message: error.message });
      }
    };

    async getCat(req: Request, res: Response):Promise<any> {
      try{
        const getCat = await Service.getCatService(req.params.id);
        const response = await ApiResponse("Se obtuvo gato", getCat);
        return res.json(response)
      } catch(error) {
        return res.status(500).json({ message: error.message });
      }
    };

}

// export const getCatsController = async (req: Request, res: Response):Promise<any> =>{
//   try{
//     const getCats = await getCatsService();
//     const response = await ApiResponse("Se obtuvieron gatos", getCats);
//     return res.json(response)
//   }catch(error){
//     return res.status(500).json({ message: error.message });
//   }
// }
//
// export const getCatController = async (req: Request, res: Response):Promise<any> =>{
//   try{
//     const getCat = await getCatService(req, res);
//     const response = await ApiResponse("Se obtuvo gato", getCat);
//     return res.json(response)
//   }catch(error){
//     return res.status(500).json({ message: error.message });
//   }
// };
//
// export const createCatsController = async (req: Request, res: Response):Promise<any> => {
//   try {
//     const createdCat = await createCatsService(req.body);
//     return res.json({
//       msg: "Se creó gato",
//       createdCat
//     })
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// };
//
// export const updateCatController = async (req: Request, res: Response):Promise<any> => {
//   try {
//     const updateCat = await updateCatService(req, res);
//     return res.json({
//       msg: "Se actualizó gato",
//       updateCat
//     })
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// };
//
// export const deleteCatController = async (req: Request, res: Response):Promise<any> => {
//   try {
//     const deleteCat = await deleteCatService(req, res);
//     return res.json({
//       msg: "Se eliminó gato",
//       deleteCat
//     })
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// };
