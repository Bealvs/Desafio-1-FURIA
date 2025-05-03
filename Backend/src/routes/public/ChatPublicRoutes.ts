import { chatController } from "../../controllers/chatController";
import express from "express";
import { Request, Response } from "express";

const ChatPublicRoutes = express.Router();

ChatPublicRoutes.get("/all", async (req: Request, res: Response) => {
    await chatController.listMessage(req, res);
   
});

ChatPublicRoutes.get("/:id", async (req: Request, res: Response) => {
    await chatController.getMessage(req, res);
   
});
export default ChatPublicRoutes;