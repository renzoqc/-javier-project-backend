import express from "express";
import { Gato } from "../entities/gatos";

const router = express.Router();

router.get('/api/gatos', async (req, res) => {

    const gato = await Gato.find();

    return res.json({
        msg: "Se obtuvo todos los gatos",
        gato
    })

});

export { router as obtenerGatoRouter }