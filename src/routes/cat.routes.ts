import { Router } from "express";
import { CatController } from '../controllers/cat.controller'

const Controller = new CatController();
const router = Router();

router.get("/cats", Controller.getCats);
router.get("/cats/:id", Controller.getCat);
router.post("/cats", Controller.createCats);
router.put("/cats/:id", Controller.updateCats);
router.delete("/cats/:id", Controller.deleteCats);

export default router;
