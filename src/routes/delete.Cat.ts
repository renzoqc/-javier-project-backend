import express from "express";
import { Gato } from "../entities/gatos";

const router = express.Router();

router.delete('/api/gatos/:gatoId/delete', async (req, res) => {
    const { gatoId } = req.params;
    const gato = await Gato.delete({id: parseInt(gatoId)});

    return res.json({
        msg: "Se eliminó gato",
        gato
    })
    
});

export { router as deleteGatoRouter }