import MessageContentParser from "./MessageContentParser";
import { BogCommands, baseCommand } from "./BogCommands";

const isBogCommand = messageContent => {
  const isBogCommand = messageContent.substring(0, 4) === baseCommand;
  return isBogCommand;
};

const isValidBogCommand = messageContent => {
  const command = MessageContentParser.getCommand(messageContent);
  return isBogCommand(messageContent) && BogCommands.hasOwnProperty(command);
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
  baseCommand,
  isBogCommand,
  isValidBogCommand,
  trimAngleBrackets,
  isValidHttpUrl,
};

export default Utilities;
