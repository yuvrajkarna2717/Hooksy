import { Controller, Post, Req } from '@nestjs/common';
import { WebhookService } from './webhook.service';

@Controller('webhook')
export class WebhookController {
  constructor(private webhookService: WebhookService) {}

  @Post()
  async handleWebhook(@Req() req) {
    const eventType = req.headers['x-github-event'];
    return this.webhookService.handleWebhook(req.body, eventType);
  }
}
