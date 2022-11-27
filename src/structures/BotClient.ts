import * as grammy from "grammy";
import { pingCommand } from "../cmds/pingCommands";
import { startCommand } from "../cmds/startCommands";
import * as config from "../config";

const bot = new grammy.Bot(config.TOKEN);
export default bot;

/* command register */
startCommand(bot);
pingCommand(bot);
