import MessageContentParser from "./MessageContentParser";
import { MessageEmbed } from "discord.js";
import Utilities from "./Utilities";
import { BogCommands, BogCommandDetails } from "./BogCommands";
import axios from "axios";
import RedditService from "./RedditService";

const sendInvalidURLMessage = (message) => {
  message.reply(
    "Aplogies, but the URL you've recommended is invalid. Please try again."
  );
};
const sendHelpMessage = (message) => {
  const command = MessageContentParser.getCommand(message.content);
  let helpWord = command === BogCommands.help ? "Help" : "Halp";
  let title = helpWord + " With Bog: Available Commands";
  let color = "008080";
  let description = `Hello, you can find a list of available options below.`;
  if (command !== BogCommands.halp && command !== BogCommands.help) {
    title = "Error Fulfilling Your Request";
    color = "ff0000";
    description =
      `Hello, it appears you need me to do` +
      ` something for you, but something went wrong. ` +
      `Please try using \`${
        BogCommandDetails[BogCommands.help].FormatText
      }\` for available commands.`;
  }
  let availableCommands = [];
  if (command === BogCommands.halp || command === BogCommands.help) {
    for (const bogCommand in BogCommands) {
      const currentCommand = BogCommandDetails[bogCommand];
      const commandField = {
        name: currentCommand.FormatText,
        value:
          `${currentCommand.Description}\n` +
          `Example: ${currentCommand.ExampleText}\n`,
      };
      availableCommands.push(commandField);
    }
  }
  const embed = new MessageEmbed()
    .setTitle(title)
    .setColor(color)
    .setDescription(description)
    .addFields(availableCommands);
  message.channel.send(embed);
};

const handleRecommendation = (message) => {
  const splittedMessage = message.content.split(" ");
  const recURL = splittedMessage[1];
  const recURLWithoutBrackets = Utilities.trimAngleBrackets(recURL);
  if (Utilities.isValidHttpUrl(recURLWithoutBrackets)) {
    const recReason = splittedMessage
      .splice(2, splittedMessage.length)
      .join(" ");
    message.channel.send(
      `*<@${message.author.id}> kindly recommended ${recURLWithoutBrackets} in ${message.channel}, saying*
          >>> ${recReason}
          `
    );
    return;
  }
  sendInvalidURLMessage(message);
};

const handleWritingPromptReq = (message) => {
  RedditService.getWritingPrompt()
    .then((response) => {
      message.reply(response.title);
    })
    .catch(() => {
      sendHelpMessage(message);
    });
};

const handleCompliments = (message) => {
  axios
    .get("https://complimentr.com/api")
    .then((response) => {
      message.reply(response.data.compliment);
    })
    .catch(() => {
      sendHelpMessage(message);
    });
};

const Controllers = {
  sendInvalidURLMessage,
  sendHelpMessage,
  handleRecommendation,
  handleWritingPromptReq,
  handleCompliments,
};

export default Controllers;
