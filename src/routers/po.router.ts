import { Router } from "express";

import Controller from "../controllers/po.controller";
import poMiddleware from "../middlewares/po.middleware";

const router = Router();

router.post("/", poMiddleware, Controller.createPurchaseOrder);

router.get("/", poMiddleware, Controller.getAllPurchaseOrders);

router.get("/:id", poMiddleware, Controller.getPurchaseOrderById);

router.put("/:id", poMiddleware, Controller.updatePurchaseOrderById);

router.delete("/:id", poMiddleware, Controller.deletePurchaseOrderById);

export default router;
