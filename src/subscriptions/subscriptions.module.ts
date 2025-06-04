import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Subscription, SubscriptionSchema } from './subscriptions.schema';
import { SubscriptionService } from './subscriptions.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Subscription.name, schema: SubscriptionSchema }])
  ],
  providers: [SubscriptionService],
  exports: [SubscriptionService], 
})
export class SubscriptionModule {}
