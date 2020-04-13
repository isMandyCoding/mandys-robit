"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es6.regexp.split");

var _MessageContentParser = _interopRequireDefault(require("./MessageContentParser"));

var _discord = require("discord.js");

var _Utilities = _interopRequireDefault(require("./Utilities"));

var _BogCommands = require("./BogCommands");

var _axios = _interopRequireDefault(require("axios"));

var _RedditService = _interopRequireDefault(require("./RedditService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const sendInvalidURLMessage = message => {
  message.reply("Aplogies, but the URL you've recommended is invalid. Please try again.");
};

const sendHelpMessage = message => {
  const command = _MessageContentParser.default.getCommand(message.content);

  let helpWord = command === _BogCommands.BogCommands.help ? "Help" : "Halp";
  let title = helpWord + " With Bog: Available Commands";
  let color = "008080";
  let description = "Hello, you can find a list of available options below.";

  if (command !== _BogCommands.BogCommands.halp && command !== _BogCommands.BogCommands.help) {
    title = "Error Fulfilling Your Request";
    color = "ff0000";
    description = "Hello, it appears you need me to do" + " something for you, but something went wrong. " + "Please try using `".concat(_BogCommands.BogCommandDetails[_BogCommands.BogCommands.help].FormatText, "` for available commands.");
  }

  let availableCommands = [];

  if (command === _BogCommands.BogCommands.halp || command === _BogCommands.BogCommands.help) {
    for (const bogCommand in _BogCommands.BogCommands) {
      const currentCommand = _BogCommands.BogCommandDetails[bogCommand];
      const commandField = {
        name: currentCommand.FormatText,
        value: "".concat(currentCommand.Description, "\n") + "Example: ".concat(currentCommand.ExampleText, "\n")
      };
      availableCommands.push(commandField);
    }
  }

  const embed = new _discord.MessageEmbed().setTitle(title).setColor(color).setDescription(description).addFields(availableCommands);
  message.channel.send(embed);
};

const handleRecommendation = message => {
  const splittedMessage = message.content.split(" ");
  const recURL = splittedMessage[1];

  const recURLWithoutBrackets = _Utilities.default.trimAngleBrackets(recURL);

  if (_Utilities.default.isValidHttpUrl(recURLWithoutBrackets)) {
    const recReason = splittedMessage.splice(2, splittedMessage.length).join(" ");
    message.channel.send("*<@".concat(message.author.id, "> kindly recommended ").concat(recURLWithoutBrackets, " in ").concat(message.channel, ", saying*\n          >>> ").concat(recReason, "\n          "));
    return;
  }

  sendInvalidURLMessage(message);
};

const handleWritingPromptReq = message => {
  _RedditService.default.getWritingPrompt().then(response => {
    message.reply(response.title);
  }).catch(() => {
    sendHelpMessage(message);
  });
};

const handleCompliments = message => {
  _axios.default.get("https://complimentr.com/api").then(response => {
    message.reply(response.data.compliment);
  }).catch(() => {
    sendHelpMessage(message);
  });
};

const Controllers = {
  sendInvalidURLMessage,
  sendHelpMessage,
  handleRecommendation,
  handleWritingPromptReq,
  handleCompliments
};
var _default = Controllers;
exports.default = _default;