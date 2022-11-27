import "dotenv/config";
import bot from "./structures/BotClient";
import chalk from "chalk";
import moment from "moment";

const date = `${moment().format("DD-MM-YYYY hh:mm:ss")}`;

bot.start({
    onStart(botInfo) {
        console.log(`${chalk.hex('#1FAC64')(`❯ SUCCESS     ${chalk.hex('#1FAC64')(`[${date}]`)} `)} ${chalk.hex('#1FAC64')(`> ✅ • Successfully logged On | ${botInfo.username}`)}`);
    },
})
