import { rest, client, HOST, PORT, CHANNEL_ID } from './src/config';
import { sendGetRequest } from './fetch/GET'

async function main() {
  client.once('ready', async () => {

    console.log(`Bot is online at http://${HOST}:${PORT}`);

    try {
      const channel = await client.channels.fetch(CHANNEL_ID);
      const json = await sendGetRequest();

      if (channel?.isTextBased()) {

        for (let i = 0; i < json.data.length; i++) {
          let message = json.data[i]
          channel.send(message.content)
        };

      } else {
        console.error('Channel is not text-based or not found.');
      }
    } catch (error) {
      console.error(error);
    }
  });
}

main()