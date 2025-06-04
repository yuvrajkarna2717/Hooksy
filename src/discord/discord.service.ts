import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

@Injectable()
export class DiscordService {
  constructor(private configService: ConfigService) {}
  async sendDiscordMessage(content: string) {
    const webhookUrl = this.configService.get<string>('DISCORD_WEB_HOOK_URI');
    if (!webhookUrl) {
      console.error('Missing DISCORD_WEB_HOOK_URI');
      return;
    }

    await axios.post(webhookUrl, {
      content,
    });
  }

  async sendSlackMessage(content: string) {
    
    const slackWebhookUrl =
      this.configService.get<string>('SLACK_WEB_HOOK_URI');
    if (!slackWebhookUrl) {
      console.error('Missing SLACK_WEBHOOK_URL');
      return;
    }

    await axios.post(slackWebhookUrl, {
      text: content,
    });
  }

  async sendTelegramMessage(content: string) {
    const telegramToken = this.configService.get<string>('TELEGRAM_BOT_TOKEN');
    const channelChatID = this.configService.get<string>('CHAT_ID');
    await axios.post(
      `https://api.telegram.org/bot${telegramToken}/sendMessage`,
      {
        chat_id: channelChatID,
        text: content,
      },
    );
  }
}
