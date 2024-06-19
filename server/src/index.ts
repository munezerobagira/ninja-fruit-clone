import "dotenv/config";

import { message } from "telegraf/filters";
import telegramBot from "./util/telegramBot";
telegramBot.start((ctx) => ctx.reply("Welcome"));
telegramBot.help((ctx) => ctx.reply("Send me a sticker"));
telegramBot.on(message("sticker"), (ctx) => ctx.reply("👍"));
telegramBot.hears("hi", (ctx) => ctx.reply("Hey there"));
telegramBot.launch();

// Enable graceful stop
process.once("SIGINT", () => telegramBot.stop("SIGINT"));
process.once("SIGTERM", () => telegramBot.stop("SIGTERM"));
