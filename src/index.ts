import express from 'express'
import cors from 'cors'
import { createConnection } from 'typeorm'
import { createGatoRouter } from './routes/createCat';
import { obtenerGatoRouter } from './routes/obtenerCat';


const app = express()
createConnection();

app.use(cors());
app.use(express.json());

//routes
app.use(createGatoRouter);
app.use(obtenerGatoRouter);

app.listen(8080);
console.log('Server on port', 8080);