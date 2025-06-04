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
  const message = this.formatMessage(payload);
  await this.discordService.sendMessage(message);
}

  formatMessage(payload: any): string {
    const repoName = payload?.repository?.full_name;
    const repoUrl = payload?.repository?.html_url;
    const branch = payload?.ref?.split('/').pop(); // 'refs/heads/main' → 'main'
    const commit = payload?.head_commit;

    if (!repoName || !commit) return 'Invalid GitHub payload received.';

    const message = [
      `📦 **[${repoName}](${repoUrl})** just received a push!`,
      ``,
      `🔀 **Branch:** \`${branch}\``,
      `✍️ **Author:** ${commit.author?.name}`,
      `📝 **Commit Message:** ${commit.message}`,
      `🔗 [View Commit](${commit.url})`,
      `🕒 **Timestamp:** ${commit.timestamp}`,
    ].join('\n');

    return message;
  }
}
