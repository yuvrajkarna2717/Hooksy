import express, { Request, Response } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import connectRoutes from "./routes/connectRoutes";
import webhookRoutes from "./routes/webhookRoutes";
import { WebhookService } from "./services/webhookService";
import { NotifyService } from "./services/notifyService";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/connect", connectRoutes);
app.use("/api/webhook", webhookRoutes);

const notify = new NotifyService();
app.get("/test/slack", async (req: Request, res: Response) => {
  notify.sendSlackMessage("Hello this is slack test.");
  res.send({
    message: "test successfully.",
  });
});
app.get("/test/discord", async (req: Request, res: Response) => {
  notify.sendDiscordMessage("Hello this is discord test.");
  res.send({
    message: "test successfully.",
  });
});
app.get("/test/telegram", async (req: Request, res: Response) => {
  notify.sendTelegramMessage("Hello this is telegram test.");
  res.send({
    message: "test successfully.",
  });
});

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error("DB connection error:", err));
