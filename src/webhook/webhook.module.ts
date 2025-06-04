import { Module } from '@nestjs/common';
import { WebhookController } from './webhook.controller';
import { WebhookService } from './webhook.service';
import { SubscriptionModule } from '../subscriptions/subscriptions.module'; // <-- add this
import { DiscordModule } from '../discord/discord.module';

@Module({
  imports: [SubscriptionModule, DiscordModule],
  controllers: [WebhookController],
  providers: [WebhookService],
})
export class WebhookModule {}
