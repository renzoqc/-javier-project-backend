import { Router } from "express";
// import { getCatsController, createCatsController, getCatController, deleteCatController, updateCatController } from "../controllers/cat.controller";
import { CatController } from '../controllers/cat.controller'

const Controller = new CatController();
const router = Router();

router.get("/cats", Controller.getCats);
router.get("/cats/:id", Controller.getCat);
// router.post("/cats", createCatsController);
// router.put("/cats/:id", updateCatController);
// router.delete("/cats/:id", deleteCatController);

export default router;
