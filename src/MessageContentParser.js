const getCommand = messageContent => {
  const indexOfFirstSpaceOrEndOfString =
    messageContent.indexOf(" ") > -1
      ? messageContent.indexOf(" ")
      : messageContent.length;
  const command = messageContent.substring(4, indexOfFirstSpaceOrEndOfString);
  return command;
};

const MessageContentParser = {
  getCommand,
};

export default MessageContentParser;
