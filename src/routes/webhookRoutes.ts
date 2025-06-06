import { Router } from "express";
import { githubWebHook } from "../controllers/githubWebhookController";

const router = Router();
router.post("/github", githubWebHook);

export default router;
