import Discord from "discord.js";
import Authorization from "./Authorization";
import ClientEventTypes from "./ClientEventTypes";
import { BogCommands } from "./BogCommands";
import MessageContentParser from "./MessageContentParser";
import Controllers from "./Controllers";
import Utilities from "./Utilities";

const client = new Discord.Client();

client.on(ClientEventTypes.ready, () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on(ClientEventTypes.message, msg => {
  if (msg.author.bot) {
    return;
  }
  if (!Utilities.isBogCommand(msg.content)) {
    // Don't do anything if not bog command/is bot
    return;
  }
  if (!Utilities.isValidBogCommand(msg.content)) {
    Controllers.sendHelpMessage(msg);
    return;
  }
  switch (MessageContentParser.getCommand(msg.content)) {
    case BogCommands.ping:
      msg.reply("pong");
      break;
    case BogCommands.help:
      Controllers.sendHelpMessage(msg);
      break;
    case BogCommands.halp:
      Controllers.sendHelpMessage(msg);
      break;
    case BogCommands.rec:
      Controllers.handleRecommendation(msg);
      break;
    default:
      return;
  }
});

client.on(ClientEventTypes.guildMemberAdd, member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.cache.find(
    ch => ch.name === "member-welcome"
  );
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Welcome to the server, ${member}`);
});

console.log(`logging in...`);
client
  .login(Authorization.token)
  .then(() => {
    console.log(`login successful, bot now listening...`);
  })
  .catch(error => {
    console.error(error);
  });
