import * as config from "../config";
import { Bot } from "grammy";

export function pingCommand(bot: Bot) {
    bot.command("ping", async (ctx) => {
        ctx.deleteMessage();
        if(!config.ID_ADMIN.includes(`${ctx.from?.id}`)) {
            const p = await ctx.reply(`@${ctx.message?.from.username} Sorry you don't have permission`)
            setTimeout(() => {
                ctx.api.deleteMessage(ctx.chat.id, p.message_id).catch(null);
            }, 10000)
        } else {
            await ctx.replyWithChatAction("typing");
            const pesan = await ctx.reply("pinging...!")
            setTimeout(async () => {
                ctx.api.deleteMessage(ctx.chat.id, pesan.message_id).catch(null)
                const hasil = await ctx.api.sendMessage(ctx.chat.id,`🏓 Pong..!`);
                setTimeout(async () => {
                    ctx.api.deleteMessage(ctx.chat.id, hasil.message_id).catch(null)
                }, 10000)
            }, 7000)
        }
    });
}
