import { Router } from "express";
import { CatController } from '../controllers/cat.controller'

const Controller = new CatController();
const router = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *      Cats:
 *          type: object
 *          properties:
 *              name:
 *                  type: string
 *                  description: el nombre del gato
 *              size:
 *                  type: integer
 *                  description: el tamaño del gato
 *              house:
 *                  type: string
 *                  description: la casa del gato
 *              owner:
 *                  type: string
 *                  description: dueño del gato
 *          required:
 *              - name
 *              - size
 *              - house
 *              - owner
 *          example:
 *              name: Alan
 *              size: 100
 *              house: Chorrillos
 *              owner: Javier
 */

/**
 * @swagger
 * /api/cats:
 *  get:
 *      summary: retorna todos los gatos
 *      tags: [Cats]   
 *      responses:
 *          200:
 *              description: todos los gatos
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Cats'
 */

/**
 * @swagger
 * /api/cats/{id}:
 *  get:
 *      summary: retorna un gato
 *      tags: [Cats]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: el id del usuario
 *      responses:
 *          200:
 *              description: gato seleccionado
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/Cats'
 *          404:
 *              description: cat not found
 */

 /**
 * @swagger
 * /api/cats:
 *  post:
 *      summary: crea un nuevo gato
 *      tags: [Cats]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Cats'
 *      responses:
 *          200:
 *              description: nuevo gato creado!
 */

 /**
 * @swagger
 * /api/cats/{id}:
 *  put:
 *      summary: actualiza un gato
 *      tags: [Cats]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: el id del usuario
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Cats'
 *      responses:
 *          200:
 *              description: gato actualizado!
 *          404:
 *              description: cat not found
 */

 /**
 * @swagger
 * /api/cats/{id}:
 *  delete:
 *      summary: elimina un gato
 *      tags: [Cats]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: el id del usuario
 *      responses:
 *          200:
 *              description: gato eliminado
 *          404:
 *              description: cat not found
 */

router.get("/cats", Controller.getCats);
router.get("/cats/:id", Controller.getCat);
router.post("/cats", Controller.createCats);
router.put("/cats/:id", Controller.updateCats);
router.delete("/cats/:id", Controller.deleteCats);

export default router;
