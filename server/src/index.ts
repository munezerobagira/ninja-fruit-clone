import "dotenv/config";

import { message } from "telegraf/filters";
import telegramBot from "./util/telegramBot";
import logger from "./util/logger";
const startMessage = `
Welcome to testing bot, that was developed as part the interview process

Just tap "Play with friends", then choose a chat and select a game.
`;
telegramBot.start((ctx) => ctx.reply(startMessage));
telegramBot.help((ctx) => ctx.reply("Send me a sticker"));
telegramBot.on(message("sticker"), (ctx) => ctx.reply("👍"));
telegramBot.hears("hi", (ctx) => ctx.reply("Hey there, how can I help you?"));
telegramBot.launch();
telegramBot.gameQuery((ctx) => {
  logger.info(ctx.callbackQuery.game_short_name);
  return ctx.answerCbQuery("Now you can play the game", {
    url: process.env.GAME_URL,
    show_alert: true,
  });
  //   ctx.reply("Game query");
});
// Enable graceful stop
process.once("SIGINT", () => telegramBot.stop("SIGINT"));
process.once("SIGTERM", () => telegramBot.stop("SIGTERM"));
