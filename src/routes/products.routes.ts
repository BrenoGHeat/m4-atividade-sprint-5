import { Router } from "express";
import { ProductsControllers } from "../controllers/products.controllers";
import { IsProductNameUnique } from "../middlewares/isProductNameUnique.middleware";
import { ValidateRequest } from "../middlewares/validateRequest";
import { createProductBodySchema } from "../schemas/createProductBody.schemas";

export const productsRoutes = Router();

const productsControllers = new ProductsControllers();

productsRoutes.post("/", ValidateRequest.execute({ body: createProductBodySchema }), IsProductNameUnique.execute, productsControllers.createProduct);
