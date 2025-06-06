import { Request, Response } from 'express';
import Integration from '../models/Integration';

export const connectSlack = async (req: Request, res: Response) => {
  const { githubWebhook, integrationWebhookOrToken } = req.body;
  try {
    const doc = await Integration.create({ githubWebhook, integrationWebhookOrToken, platform: 'slack' });
    res.status(201).json(doc);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

export const connectDiscord = async (req: Request, res: Response) => {
  const { githubWebhook, integrationWebhookOrToken } = req.body;
  try {
    const doc = await Integration.create({ githubWebhook, integrationWebhookOrToken, platform: 'discord' });
    res.status(201).json(doc);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

export const connectTelegram = async (req: Request, res: Response) => {
  const { githubWebhook, integrationWebhookOrToken, chatId } = req.body;
  try {
    const doc = await Integration.create({ githubWebhook, integrationWebhookOrToken, chatId, platform: 'telegram' });
    res.status(201).json(doc);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};
