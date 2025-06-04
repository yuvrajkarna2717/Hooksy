import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Subscription extends Document {
  @Prop({ required: true }) repo: string;
  @Prop({ required: true }) discordWebhookUrl: string;
}

export const SubscriptionSchema = SchemaFactory.createForClass(Subscription);
