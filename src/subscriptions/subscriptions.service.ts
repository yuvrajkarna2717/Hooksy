import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Subscription } from './subscriptions.schema';

@Injectable()
export class SubscriptionService {
  constructor(@InjectModel(Subscription.name) private model: Model<Subscription>) {}

  async getByRepo(repo: string) {
    return this.model.find({ repo });
  }

  async addSubscription(repo: string, webhookUrl: string) {
    return this.model.create({ repo, discordWebhookUrl: webhookUrl });
  }
}
