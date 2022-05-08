import { Router } from "express";
import { getCatsController, createCatsController, getCatController, deleteCatController, updateCatController } from "../controllers/cat.controller";

const router = Router();

router.get("/cats",getCatsController);
router.get("/cats/:id",getCatController);
router.post("/cats", createCatsController);
router.put("/cats/:id", updateCatController);
router.delete("/cats/:id", deleteCatController);

export default router;
