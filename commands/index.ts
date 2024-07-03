import { Routes } from 'discord.js';
import { rest, client } from "../src/config";
import * as ping from "./ping";
import * as update from "./update";


const commands = [
    ping, update
];
const CLIENT_ID = "1258140404226719847"

const GUILD_ID = "677258988605145159"

rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), { body: commands.map(command => command.data.toJSON()) })
	.then((data: any) => console.log(`Successfully registered ${data.length} application commands.`))
	.catch(console.error);

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;
  for ( const { execute, commandName } of commands) {
    if ( interaction.commandName == commandName )
      await execute(interaction);
  }
});
