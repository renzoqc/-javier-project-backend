import { Router } from "express";
import { getCatsController, createCatController } from "../controllers/cat.controller";

const router = Router();

router.get("/cats",getCatsController);
router.post("/cats", createCatController);

export default router;
