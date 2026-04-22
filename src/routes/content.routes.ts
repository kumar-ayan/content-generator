import { Router, Request, Response } from "express";
import { generateContent } from "../services/ai.service.js";

const router = Router();

router.post("/generate", async (req: Request, res: Response): Promise<void> => {
  const { topic, tone } = req.body;

  if (!topic || typeof topic !== "string") {
    res.status(400).json({ error: "Please provide a valid topic string." });
    return;
  }

  try {
    const content = await generateContent(topic, tone);
    res.json(content);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

export default router;
