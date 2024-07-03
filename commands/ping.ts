import { SlashCommandBuilder, ChatInputCommandInteraction, CacheType } from 'discord.js';

export const commandName = "ping";

export async function execute(interaction: ChatInputCommandInteraction<CacheType>) {
  console.log(interaction)
  return await interaction.reply("pong!")
}

export const data = new SlashCommandBuilder()
    .setName(commandName)
    .setDescription("Pong");
