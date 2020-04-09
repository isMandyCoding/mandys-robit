"use strict";

var _discord = _interopRequireDefault(require("discord.js"));

var _Authorization = _interopRequireDefault(require("./Authorization"));

var _ClientEventTypes = _interopRequireDefault(require("./ClientEventTypes"));

var _BogCommands = require("./BogCommands");

var _MessageContentParser = _interopRequireDefault(require("./MessageContentParser"));

var _Controllers = _interopRequireDefault(require("./Controllers"));

var _Utilities = _interopRequireDefault(require("./Utilities"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const client = new _discord.default.Client();
client.on(_ClientEventTypes.default.ready, () => {
  console.log("Logged in as ".concat(client.user.tag, "!"));
});
client.on(_ClientEventTypes.default.message, msg => {
  if (msg.author.bot) {
    return;
  }

  if (!_Utilities.default.isBogCommand(msg.content)) {
    // Don't do anything if not bog command/is bot
    return;
  }

  if (!_Utilities.default.isValidBogCommand(msg.content)) {
    _Controllers.default.sendHelpMessage(msg);

    return;
  }

  switch (_MessageContentParser.default.getCommand(msg.content)) {
    case _BogCommands.BogCommands.ping:
      msg.reply("pong");
      break;

    case _BogCommands.BogCommands.help:
      _Controllers.default.sendHelpMessage(msg);

      break;

    case _BogCommands.BogCommands.halp:
      _Controllers.default.sendHelpMessage(msg);

      break;

    case _BogCommands.BogCommands.rec:
      _Controllers.default.handleRecommendation(msg);

      break;

    default:
      return;
  }
});
console.log("logging in...");
client.login(_Authorization.default.token).then(() => {
  console.log("login successful, bot now listening...");
}).catch(error => {
  console.error(error);
});