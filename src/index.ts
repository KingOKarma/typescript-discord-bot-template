import { Client } from 'discord.js-commando';
import path from 'path';
import Config from './config/config';

const CONFIG = Config.getConfig();

const bot = new Client({
  // My choses prefix is "c." you can choose anything you want!
  commandPrefix: 'c.',
  owner: CONFIG.owners,

});
bot.on('ready', async () => {
  if (bot.user === null) {
    return;
  }
  console.log(`${bot.user.tag} is online!`);
  await bot.user.setActivity('your colour(s)', { type: 'WATCHING' });
});
// registers all groups/commands/etc
bot.registry
  .registerGroups([
    ['group1', 'This is a group, you can make more if you wish!'],
  ])
  .registerDefaults()
  .registerCommandsIn(path.join(__dirname, 'commands'));
bot.login(CONFIG.token);
