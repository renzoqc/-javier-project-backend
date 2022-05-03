import express from "express";
import { Gato } from "../entities/gatos";

const router = express.Router();

router.post('/api/gato', async (req, res) => {
    const {
        nombre,
        tamanio,
        hogar,
        duenio,
    } = req.body;

    const gato = Gato.create({
        name: nombre,
        size: tamanio,
        house: hogar,
        owner: duenio
    });

    await gato.save();
    
    return res.json({
        msg: "Se creó gato",
        gato
    })

});

export { router as createGatoRouter }