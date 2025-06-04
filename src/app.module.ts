import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WebhookModule } from './webhook/webhook.module';
import { SubscriptionModule } from './subscriptions/subscriptions.module';
import { DiscordModule } from './discord/discord.module';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(
      process.env.MONGO_URI ||
        'mongodb+srv://yuvrajkarna2000:HuJv55gQdcbgiteW@cluster0.ufizn2k.mongodb.net/',
    ),
    WebhookModule,
    SubscriptionModule,
    DiscordModule,
    SubscriptionModule,
  ],
})
export class AppModule {}
