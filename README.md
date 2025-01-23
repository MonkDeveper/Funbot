# Revenge Bot

Revenge Bot is a powerful, secretive Discord bot designed for education and demonstration purposes only. It carries out specific commands that include channel deletion, bot banning, and creation of spam channels as part of its "revenge" functionality. This bot should only be used responsibly and in controlled environments.

## Features

- **Bans All Bots:** Automatically bans all other bots on the server upon being added.
- **Deletes Everything Secretly:** Behind the scenes, it removes all roles, emojis, and integrations.
- **Channel Destruction:** Deletes all channels in the server last to maintain secrecy during execution.
- **DM Notifications:** Sends a direct message to the person who added the bot, providing updates on the bot's actions.
- **Revenge Channels:** Creates 50 channels named "revenge" and spams them with a specific message.

## Installation

1. Clone this repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd revenge-bot
   ```

3. Install the required dependencies:
   ```bash
   npm install
   ```

4. Edit the `config.json` file to include your bot token:
   ```json
   {
     "token": "YOUR_BOT_TOKEN"
   }
   ```

5. Run the bot:
   ```bash
   node index.js
   ```

## Usage

Once the bot is added to a server, it will automatically execute its functionality as described:

1. Bans all bots in the server.
2. Deletes roles, emojis, and integrations without notification.
3. Deletes all channels in the server.
4. Sends a DM to the person who added the bot, updating them about its progress.
5. Creates 50 channels named "revenge" and spams them with the message: `"GG join https://dc.gg/revenge"`.

## Disclaimer

**Important:** This bot is strictly for educational purposes and demonstrations. The authors of this bot are not responsible for any misuse or damage caused by deploying it. Use it only in controlled environments and with explicit permission from server owners.

## License

This project is licensed under the [MIT License](LICENSE). However, the following additional restrictions apply:

1. The Software must not be used, copied, modified, merged, published, distributed, sublicensed, or sold as if it were the original work of the user. Proper attribution to the original author(s) is required.
2. The authors are not liable for any damages or misuse of the software.

## Support

For questions or issues, please open an issue in this repository or contact the original developer.

