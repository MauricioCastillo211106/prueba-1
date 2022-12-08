import { Router } from "express";
import bodyParser from "body-parser";
import { dataController } from "../controllers/data.controller.js";

const router = Router();
const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });


/**
 * @openapi
 * '/api/data/view':
 *  get:
 *     tags:
 *     - Data
 *     summary: visualizar usuarios
 *     responses:
 *      200:
 *        description: view
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 */

/**
 * @openapi
 * '/api/data/create':
 *  post:
 *     tags:
 *     - Data
 *     summary: Crea data
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              -temperatura
 *              - humedad
 *              - ultrasonico
 *              - luminosidad
 *            properties:
 *              temperatura:
 *                type: INTEGER
 *                default: 2
 *              humedad:
 *                type: INTEGER
 *                default: 2
 *              ultrasonico:
 *                type: INTEGER
 *                default: 12
 *              luminosidad:
 *                type: INTEGER
 *                default: 23
 *     responses:
 *      200:
 *        description: Create
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 */

/**
 * @openapi
 * '/api/data/delete':
 *  delete:
 *     tags:
 *     - data
 *     summary: eliminar Producto
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            required:
 *            properties:
 *     responses:
 *      200:
 *        description: update
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 */


 router.get("/view", (req, res) => dataController.data_view(req, res));

router.post("/create", (req, res) => dataController.data_create(req, res));

router.put("/update", (req, res) => dataController.data_update(req, res));

router.delete("/delete", (req, res) => dataController.data_delete(req, res));


export default router;
