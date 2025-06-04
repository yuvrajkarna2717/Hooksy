import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

@Injectable()
export class DiscordService {
  constructor(private configService: ConfigService) {}
  async sendMessage(content: string) {
    const webhookUrl = this.configService.get<string>('DISCORD_WEB_HOOK_URI');
    if (!webhookUrl) {
      console.error('Missing DISCORD_WEB_HOOK_URI');
      return;
    }

    await axios.post(webhookUrl, {
      content
    });
  }
}
