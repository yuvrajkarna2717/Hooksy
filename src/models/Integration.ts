import { Schema, model, Document } from 'mongoose';

export interface IIntegration extends Document {
  githubWebhook: string;
  integrationWebhookOrToken: string;
  chatId?: string;
  platform: 'slack' | 'discord' | 'telegram';
}

const integrationSchema = new Schema<IIntegration>({
  githubWebhook: { type: String, required: true },
  integrationWebhookOrToken: { type: String, required: true },
  chatId: String,
  platform: { type: String, required: true, enum: ['slack', 'discord', 'telegram'] },
}, { timestamps: true });

export default model<IIntegration>('Integration', integrationSchema);
