# Wishlist Telegram Bot

## Description
This is a Telegram bot designed for managing a shopping wishlist. Users can add or remove items from the wishlist and check which user has purchased specific items. The bot is built using JavaScript and the [Telegraf.js](https://telegraf.js.org/) library for seamless interaction with the Telegram API. It utilizes environment variables (via `.env`) for secure configuration and the Node.js `fs` module for file-based data persistence.

## Features
- **Add Items**: Users can add items to the shared wishlist.
- **Remove Items**: Users can remove items from the wishlist.
- **Track Purchases**: Check which user has marked an item as purchased.
- **Persistent Storage**: Wishlist data is stored using the Node.js `fs` module.
- **Secure Configuration**: Bot token and other sensitive data are managed via environment variables.

## Technologies
- **JavaScript**: Core programming language.
- **Telegraf.js**: Framework for building Telegram bots.
- **Node.js FS Module**: For reading and writing wishlist data to a file.
- **dotenv**: For managing environment variables.

## Setup
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/wishlist-telegram-bot.git
   cd wishlist-telegram-bot
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Create a `.env` file in the root directory and add your Telegram bot token:
   ```env
   BOT_TOKEN=your-telegram-bot-token
   ```

4. **Run the Bot**:
   ```bash
   node index.js
   ```

## Usage
- **/start**: Initializes the bot and displays a welcome message.
- **/add <item>**: Adds an item to the wishlist.
- **/remove <item>**: Removes an item from the wishlist.
- **/list**: Displays the current wishlist and purchased items with user details.

## Project Structure
- `index.js`: Main bot logic and command handlers.
- `.env`: Environment variables (e.g., bot token).
- `wishlist.json`: File for storing wishlist data (created automatically).
- `package.json`: Project dependencies and scripts.

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit (`git commit -m "Add feature"`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.