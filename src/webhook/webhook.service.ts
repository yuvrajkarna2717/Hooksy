import { Injectable } from '@nestjs/common';
import { SubscriptionService } from '../subscriptions/subscriptions.service';
import { DiscordService } from '../discord/discord.service';

@Injectable()
export class WebhookService {
  constructor(
    private subService: SubscriptionService,
    private discordService: DiscordService,
  ) {}

  async handleWebhook(payload: any) {
    const repo = payload?.repository?.full_name;
    if (!repo) return;

    const subs = await this.subService.getByRepo(repo);
    const message = this.formatMessage(payload);

    for (const sub of subs) {
      await this.discordService.sendMessage(message);
    }
  }

  formatMessage(payload: any): string {
    if (payload.pull_request) {
      return `📦 New PR: ${payload.pull_request.title} — ${payload.pull_request.html_url}`;
    }
    if (payload.issue) {
      return `🐞 New Issue: ${payload.issue.title} — ${payload.issue.html_url}`;
    }
    return `🔔 New event in ${payload.repository.full_name}`;
  }
}
