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

        const response = getCat ? ApiResponse("Se obtuvo gato", getCat) : ApiResponse("No se ha encontrado gato", {});

        return res.json(response)
      } catch(error) {
        return res.status(500).json({ message: error.message });
      }
    };

    async createCats(req: Request, res: Response):Promise<any> {
        try{
            const createCat = await Service.createCatsService(req.body);
            const response = ApiResponse("Se creó gato", createCat);
            return res.json(response)
        } catch(error) {
            return res.status(500).json({ message: error.message });
        };
    };
    
    async updateCats(req: Request, res: Response):Promise<any> {
        try{
            const updatedCat = await Service.updateCatService(req, res);

            if(updatedCat) {
                const response = ApiResponse("Se actualizó gato", updatedCat);
                return res.json(response)
            }

            const response = ApiResponse("No se encontró gato", {});
            return res.json(response)
        } catch(error) {
            return res.status(500).json({ message: error.message });
        };
    };

    async deleteCats(req: Request, res: Response):Promise<any> {
        try{
            const deletedCat = await Service.deleteCatService(req.params.id);

            if(deletedCat){
                const response = ApiResponse("Se eliminó gato", deletedCat);
                return res.json(response)
            }
            const response = ApiResponse("No se encontró gato", {});
            return res.json(response)
        } catch(error) {
            return res.status(500).json({ message: error.message });
        };
    };
}