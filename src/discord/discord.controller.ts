import { Controller, Get } from '@nestjs/common';
import { DiscordService } from './discord.service';

@Controller('test') // your route prefix
export class DiscordController {
  constructor(private readonly discordService: DiscordService) {}

  @Get('discord')
  async sendTestMessage() {
    await this.discordService.sendMessage(
      '🚀 Test message from Hooksy DEV to Discord!',
    );
    return { status: 'Message sent to Discord!' };
  }
}
