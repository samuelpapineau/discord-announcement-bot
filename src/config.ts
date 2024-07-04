import { Client, Partials, GatewayIntentBits } from 'discord.js';
import { REST } from '@discordjs/rest'
import 'isomorphic-fetch'
require("dotenv").config();

if (!process.env.DISCORD_TOKEN) throw new Error("process.env.DISCORD_TOKEN is required");
if (!process.env.HOST) throw new Error("process.env.HOST is required");
if (!process.env.PORT) throw new Error("process.env.PORT is required");
if (!process.env.CHANNEL_ID) throw new Error("process.env.CHANNEL_ID is required");

export const DISCORD_TOKEN = process.env.DISCORD_TOKEN
export const HOST = process.env.HOST
export const PORT = process.env.PORT
export const CHANNEL_ID = process.env.CHANNEL_ID

export const client = new Client({
    intents: [
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.Guilds,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.GuildScheduledEvents,
        GatewayIntentBits.GuildMembers
    ],
    partials: [Partials.Message, Partials.Channel, Partials.Reaction],
});

client.login(DISCORD_TOKEN);

export const rest = new REST({ version: '10' }).setToken(DISCORD_TOKEN);