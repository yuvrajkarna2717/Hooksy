import { Request, Response } from "express";
import { WebhookService } from "../services/webhookService";

const webhookService = new WebhookService();
export const githubWebHook = async (req: Request, res: Response) => {
  const eventType = req.header("X-GitHub-Event");
  if (!eventType) return res.status(400).send("Missing GitHub Event Type");

  try {
    await webhookService.handleWebhook(req.body, eventType);
    res.status(200).send("Webhook handled");
  } catch (err) {
    console.error("Webhook error:", err);
    res.status(500).send("Error processing webhook");
  }
};
