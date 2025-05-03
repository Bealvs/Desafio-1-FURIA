import express from "express";
import ChatPublicRoutes from "./public/ChatPublicRoutes.ts";

const router = express.Router();

router.use('/messages', ChatPublicRoutes);

export default router;



