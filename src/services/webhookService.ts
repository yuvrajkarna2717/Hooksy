import { NotifyService } from "./notifyService";

export class WebhookService {
  private notifyService: NotifyService;

  constructor() {
    this.notifyService = new NotifyService();
  }

  async handleWebhook(payload: any, eventType: string): Promise<void> {
    const message = this.formatMessageByEvent(eventType, payload);

    if (message) {
      await this.notifyService.sendDiscordMessage(message);
      await this.notifyService.sendTelegramMessage(message);
      await this.notifyService.sendSlackMessage(message);
    } else {
      console.log(`Ignored event: ${eventType}`);
    }
  }

  private formatMessageByEvent(event: string, payload: any): string | null {
    switch (event) {
      case "push":
        return this.formatPushMessage(payload);
      case "pull_request":
        return this.formatPullRequestMessage(payload);
      case "issues":
        return this.formatIssueMessage(payload);
      case "star":
        return this.formatStarMessage(payload);
      case "fork":
        return this.formatForkMessage(payload);
      default:
        return null;
    }
  }

  private formatPushMessage(payload: any): string {
    const repo = payload.repository.full_name;
    const branch = payload.ref?.split("/")?.pop();
    const commit = payload.head_commit;

    return [
      `🚀 **Push to \`${repo}\` on branch \`${branch}\`**`,
      `✍️ Author: ${commit.author.name}`,
      `📝 Message: ${commit.message}`,
      `🔗 [View Commit](${commit.url})`,
    ].join("\n");
  }

  private formatPullRequestMessage(payload: any): string {
    const action = payload.action;
    const pr = payload.pull_request;
    const repo = payload.repository.full_name;

    return [
      `📣 **Pull Request \`${action}\` in \`${repo}\`**`,
      `🔖 Title: ${pr.title}`,
      `✍️ Author: ${pr.user.login}`,
      `🔗 [View PR](${pr.html_url})`,
      `📝 ${pr.body || "_No description provided._"}`,
    ].join("\n");
  }

  private formatIssueMessage(payload: any): string {
    const action = payload.action;
    const issue = payload.issue;
    const repo = payload.repository.full_name;

    return [
      `🐞 **Issue \`${action}\` in \`${repo}\`**`,
      `🔖 Title: ${issue.title}`,
      `✍️ Author: ${issue.user.login}`,
      `🔗 [View Issue](${issue.html_url})`,
      `📝 ${issue.body || "_No description provided._"}`,
    ].join("\n");
  }

  private formatStarMessage(payload: any): string {
    const repo = payload.repository.full_name;
    const sender = payload.sender.login;

    return `⭐ **${sender} starred \`${repo}\`**`;
  }

  private formatForkMessage(payload: any): string {
    const repo = payload.repository.full_name;
    const forkee = payload.forkee.full_name;
    const sender = payload.sender.login;

    return `🍴 **${sender} forked \`${repo}\` → \`${forkee}\`**`;
  }
}
