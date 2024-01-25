import express, { Request, Response } from "express";
import { LikesController } from "../controllers/likesController";

const router = express.Router();
const likesController = new LikesController();

router.post("/likes/:imageId", (req: Request, res: Response) => {
  const imageId = req.params.imageId;
  const likes = likesController.addLike(imageId);
  res.json({ imageId, likes });
});

router.get("/likes/:imageId", (req: Request, res: Response) => {
  const imageId = req.params.imageId;
  const likes = likesController.getLikes(imageId);
  res.json({ imageId, likes });
});

export default router;
