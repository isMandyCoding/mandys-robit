"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _MessageContentParser = _interopRequireDefault(require("./MessageContentParser"));

var _BogCommands = require("./BogCommands");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const isBogCommand = messageContent => {
  const isBogCommand = messageContent.substring(0, 4) === _BogCommands.baseCommand;

  return isBogCommand;
};

const isValidBogCommand = messageContent => {
  const command = _MessageContentParser.default.getCommand(messageContent);

  return isBogCommand(messageContent) && _BogCommands.BogCommands.hasOwnProperty(command);
};

const trimAngleBrackets = string => {
  let startIndex = 0;
  let endIndex = string.length;
  const isFirstCharacterAngleBracket = string[0] === "<";

  if (isFirstCharacterAngleBracket) {
    startIndex = 1;
  }

  const isLastCharacterAngleBracket = string[string.length - 1] === ">";

  if (isLastCharacterAngleBracket) {
    endIndex = string.length - 1;
  }

  return string.substring(startIndex, endIndex);
};

const isValidHttpUrl = string => {
  let url;

  try {
    url = new URL(string);
  } catch (_) {
    return false;
  }

  return url.protocol === "http:" || url.protocol === "https:";
};

const Utilities = {
  baseCommand: _BogCommands.baseCommand,
  isBogCommand,
  isValidBogCommand,
  trimAngleBrackets,
  isValidHttpUrl
};
var _default = Utilities;
exports.default = _default;