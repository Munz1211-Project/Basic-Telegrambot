import { Bot } from "grammy";

export function startCommand(bot: Bot) {
    bot.command("start", async (ctx) => {
        ctx.deleteMessage();
        await ctx.replyWithChatAction("typing");
        const pesan = await ctx.api.sendMessage(ctx.chat.id,`Hi @${ctx.message?.from.username} 🖐\nWelcome To Bot @munzdev`)
        setTimeout(async () => {
            ctx.api.deleteMessage(ctx.chat.id, pesan.message_id).catch(null)
        }, 30000)
    });
}
