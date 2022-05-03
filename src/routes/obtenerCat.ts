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

router.get('/api/gatos/:gatoId', async (req, res) => {
    const { gatoId } = req.params;
    const gato = await Gato.findOneBy({id: parseInt(gatoId)});

    if(gato){
        return res.json({
            msg: "Se obtuvo gato",
            gato
        })
    }
    
    return res.status(404).json({msg: 'Gato no encontrado'});
    
});

export { router as obtenerGatoRouter }