import { Routes } from 'discord.js';
import { rest, client, host, port } from "./src/config";

const channelId = '677258989158924347';

client.once('ready', async () => {

  console.log(`Bot is online at ${host}:${port}`);

  const channel = await client.channels.fetch(channelId);
  if (channel?.isTextBased()) {
    channel.send('test');
  } else {
    console.error('Channel is not text-based or not found.');
  }
});