import { Telegraf } from "telegraf";
import logger from "./logger";
if (!process.env.BOT_TOKEN) {
  throw new Error("Please provide a valid bot token");
}
const telegramBot = new Telegraf(process.env.BOT_TOKEN);
telegramBot.use((ctx, next) => {
  const start = process.hrtime();
  return next().then(() => {
    const endtime = process.hrtime(start);
    logger.info("Response time: %sms", endtime);
  });
});
export default telegramBot;
