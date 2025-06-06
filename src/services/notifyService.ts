import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export class NotifyService {
  async sendDiscordMessage(content: string) {
    const webhookUrl = process.env.DISCORD_WEB_HOOK_URI;
    if (!webhookUrl) {
      console.error("Missing DISCORD_WEB_HOOK_URI");
      return;
    }

    await axios.post(webhookUrl, { content });
  }

  async sendSlackMessage(content: string) {
    const slackWebhookUrl = process.env.SLACK_WEB_HOOK_URI;
    if (!slackWebhookUrl) {
      console.error("Missing SLACK_WEB_HOOK_URI");
      return;
    }

    await axios.post(slackWebhookUrl, { text: content });
  }

  async sendTelegramMessage(content: string) {
    const telegramToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.CHAT_ID;

    if (!telegramToken || !chatId) {
      console.error("Missing TELEGRAM_BOT_TOKEN or CHAT_ID");
      return;
    }

    await axios.post(
      `https://api.telegram.org/bot${telegramToken}/sendMessage`,
      {
        chat_id: chatId,
        text: content,
      }
    );
  }
}
