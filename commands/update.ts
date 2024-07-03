import { SlashCommandBuilder, ChatInputCommandInteraction, CacheType } from 'discord.js';
//temp data
import json from '../example/example-data.json';


export const commandName = "update";

export async function execute(interaction: ChatInputCommandInteraction<CacheType>) {
  if (json.length == 0){
    return interaction.reply("No updates")
  }
  for(let i = 0; i < json.length; i++){
    let message = json[i]
    interaction.channel?.send(message.content)
  };
  return interaction.reply("Life Updates:")
}

export const data = new SlashCommandBuilder()
    .setName(commandName)
    .setDescription("Updates");