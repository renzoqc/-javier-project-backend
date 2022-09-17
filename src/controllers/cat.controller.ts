import { Request, Response } from "express";
import { Cat } from "src/entity/cat";
import { DeleteCatInterface, GetCatsInterface, IGetErrorMessage, IResponseCat, IResponseCatNull, IResponseController, ObjectCatInterface } from "src/interfaces/cat.interface";
import { CatService } from '../providers/cat.service';
import { ApiResponse } from '../response/cat.response'
import type * as E from 'express';

const Service = new CatService();

export class CatController {
    constructor() {}

    async getCats(req: Request, res: Response):Promise<E.Response<GetCatsInterface>> {
      try{
        const getCats: Cat[] = await Service.getCatsService();
        let response: IResponseController | null;

        if(getCats.length ===0 ) {
          response = ApiResponse("No se encontraron gatos", getCats, "");
          return res.status(403).json(response);
        }
        response = ApiResponse("Se obtuvieron gatos", getCats, "");
        return res.json(response)
      } catch(error) {
        return res.status(500).json({ message: error.message });
      }
    };

    async getCat(req: Request, res: Response):Promise<E.Response<ObjectCatInterface>> {
      try{
        const getCat: Cat | IGetErrorMessage = await Service.getCatService(req.params.id);

        const response: IResponseCat = getCat ? ApiResponse("Se obtuvo gato", getCat, "") : ApiResponse("No se ha encontrado gato", {}, "");
        return res.json(response)
      } catch(error) {
        return res.status(500).json({ message: error.message });
      }
    };

    async createCats(req: Request, res: Response):Promise<E.Response<ObjectCatInterface>> {
        try{
            const createCat: Cat[] = await Service.createCatsService(req.body);
            const response: IResponseController = ApiResponse("Se creó gato", createCat, "");
            return res.json(response)
        } catch(error) {
            return res.status(500).json({ message: error.message });
        };
    };
    
    async updateCats(req: Request, res: Response):Promise<E.Response<ObjectCatInterface>> {
        try{
            const updatedCat: Cat | null = await Service.updateCatService(req.params.id, req.body);
            let response: IResponseCat | IResponseCatNull;

            if(!updatedCat) {
                response = ApiResponse("No se encontró gato", {}, "");
                return res.status(404).json(response)
            }
            response = ApiResponse("Se actualizó el gato", updatedCat, "")
            return res.json(response)
        } catch(error) {
            return res.status(500).json({ message: error.message });
        };
    };

    async deleteCats(req: Request, res: Response):Promise<E.Response<DeleteCatInterface>> {
        try{
            const deletedCat: true | false = await Service.deleteCatService(req.params.id);
            let response: IResponseCat;

            if(deletedCat){
                response = ApiResponse(`Se eliminó gato con id = ${req.params.id}`, deletedCat, "");
                return res.json(response)
            }
            response = ApiResponse("No se encontró gato", {}, "");
            return res.status(404).json(response)
        } catch(error) {
            return res.status(500).json({ message: error.message });
        };
    };
}