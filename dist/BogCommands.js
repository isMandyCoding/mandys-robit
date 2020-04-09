"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BogCommandDetails = exports.BogCommands = exports.baseCommand = void 0;
const baseCommand = "bog!";
exports.baseCommand = baseCommand;
const BogCommands = {
  ping: "ping",
  help: "help",
  halp: "halp",
  rec: "rec",
  prompt: "prompt",
  compliment: "compliment"
};
exports.BogCommands = BogCommands;
const BogCommandDetails = {
  ping: {
    Description: "Replies with the message 'Pong'",
    FormatText: "".concat(baseCommand).concat(BogCommands.ping),
    ExampleText: "".concat(baseCommand).concat(BogCommands.ping)
  },
  help: {
    Description: "Sends message to the channel with available commands.",
    FormatText: "".concat(baseCommand).concat(BogCommands.help),
    ExampleText: "".concat(baseCommand).concat(BogCommands.help)
  },
  halp: {
    Description: "Sends message to the channel with available commands.",
    FormatText: "".concat(baseCommand).concat(BogCommands.halp),
    ExampleText: "".concat(baseCommand).concat(BogCommands.halp)
  },
  rec: {
    Description: "Sends a message to the designated channel",
    FormatText: "".concat(baseCommand).concat(BogCommands.rec, " [VALID_URL] [RECCOMENDATION_TEXT]"),
    ExampleText: "".concat(baseCommand).concat(BogCommands.rec, " <https://www.google.com/> I love this!")
  },
  prompt: {
    Description: "Returns a random post from the WritingPrompts subreddit.",
    FormatText: "".concat(baseCommand).concat(BogCommands.prompt),
    ExampleText: "".concat(baseCommand).concat(BogCommands.prompt)
  },
  compliment: {
    Description: "Pays you a compliment.",
    FormatText: "".concat(baseCommand).concat(BogCommands.compliment),
    ExampleText: "".concat(baseCommand).concat(BogCommands.compliment)
  }
};
exports.BogCommandDetails = BogCommandDetails;