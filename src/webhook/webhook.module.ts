import { Module } from '@nestjs/common';
import { WebhookController } from './webhook.controller';
import { WebhookService } from './webhook.service';
import { DiscordModule } from '../discord/discord.module';

@Module({
  imports: [ DiscordModule],
  controllers: [WebhookController],
  providers: [WebhookService],
})
export class WebhookModule {}
