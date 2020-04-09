"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const getCommand = messageContent => {
  const indexOfFirstSpaceOrEndOfString = messageContent.indexOf(" ") > -1 ? messageContent.indexOf(" ") : messageContent.length;
  const command = messageContent.substring(4, indexOfFirstSpaceOrEndOfString);
  return command;
};

const MessageContentParser = {
  getCommand
};
var _default = MessageContentParser;
exports.default = _default;