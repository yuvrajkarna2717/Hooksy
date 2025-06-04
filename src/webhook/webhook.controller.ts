import { Controller, Post, Req } from '@nestjs/common';
import { WebhookService } from './webhook.service';

@Controller('webhook')
export class WebhookController {
  constructor(private webhookService: WebhookService) {}

  @Post()
  async handleWebhook(@Req() req) {
    return this.webhookService.handleWebhook(req.body);
  }
}
