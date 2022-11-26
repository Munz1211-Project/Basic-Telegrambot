import "dotenv/config";
import * as grammy from "grammy";
import * as config from "./config";
import chalk from "chalk";
import moment from "moment";
import { setTimeout } from "timers";

export const bot = new grammy.Bot(config.TOKEN);
export const date = `${moment().format("DD-MM-YYYY hh:mm:ss")}`;

bot.start({
    onStart(botInfo) {
        console.log(`${chalk.hex('#1FAC64')(`❯ SUCCESS     ${chalk.hex('#1FAC64')(`[${date}]`)} `)} ${chalk.hex('#1FAC64')(`> ✅ • Successfully logged On | ${botInfo.username}`)}`);
    },
})

bot.command("start", async (ctx) => {
    ctx.deleteMessage();
    await ctx.replyWithChatAction("typing");
    ctx.api.sendMessage(ctx.chat.id,`Hi ${ctx.message?.from.first_name} 🖐\nWelcome To Bot @munzdev`)
});

bot.command("p", async (ctx) => {
        ctx.deleteMessage();
        if(!config.ID_ADMIN.includes(`${ctx.from?.id}`)) {
            const p = await ctx.reply("no have akses")
            setTimeout(() =>{
                ctx.api.deleteMessage(ctx.chat.id, p.message_id).catch(null);
            }, 2500)
        } else {
            await ctx.replyWithChatAction("typing");
            const pesan = await ctx.reply("pinging...!")
            setTimeout(async () => {
                ctx.api.deleteMessage(ctx.chat.id, pesan.message_id).catch(null)
                await ctx.api.sendMessage(ctx.chat.id, "Done!");
            }, 10000)
        }
});
