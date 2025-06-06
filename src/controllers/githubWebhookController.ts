import { Request, Response } from "express";
import { WebhookService } from "../services/webhookService";

const webhookService = new WebhookService();
export const githubWebHook = async (req: Request, res: Response) => {
  console.log("req")
  const eventType = req.header("X-GitHub-Event") || "";
  if (!eventType)  {
    res.status(400).send("Missing GitHub Event Type");
    return;
  }

  console.log("eventType", eventType);

  try {
    await webhookService.handleWebhook(req.body, eventType);
    console.log("webhook called");
    res.status(200).send("Webhook handled");
  } catch (err) {
    console.error("Webhook error:", err);
    res.status(500).send("Error processing webhook");
  }
};
