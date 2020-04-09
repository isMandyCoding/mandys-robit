export const baseCommand = "bog!";

export const BogCommands = {
  ping: "ping",
  help: "help",
  halp: "halp",
  rec: "rec",
  prompt: "prompt",
  compliment: "compliment",
};

export const BogCommandDetails = {
  ping: {
    Description: "Replies with the message 'Pong'",
    FormatText: `${baseCommand}${BogCommands.ping}`,
    ExampleText: `${baseCommand}${BogCommands.ping}`,
  },
  help: {
    Description: "Sends message to the channel with available commands.",
    FormatText: `${baseCommand}${BogCommands.help}`,
    ExampleText: `${baseCommand}${BogCommands.help}`,
  },
  halp: {
    Description: "Sends message to the channel with available commands.",
    FormatText: `${baseCommand}${BogCommands.halp}`,
    ExampleText: `${baseCommand}${BogCommands.halp}`,
  },
  rec: {
    Description: "Sends a message to the designated channel",
    FormatText: `${baseCommand}${BogCommands.rec} [VALID_URL] [RECCOMENDATION_TEXT]`,
    ExampleText: `${baseCommand}${BogCommands.rec} \<https://www.google.com/\> I love this!`,
  },
  prompt: {
    Description: "Returns a random post from the WritingPrompts subreddit.",
    FormatText: `${baseCommand}${BogCommands.prompt}`,
    ExampleText: `${baseCommand}${BogCommands.prompt}`,
  },
  compliment: {
    Description: "Pays you a compliment.",
    FormatText: `${baseCommand}${BogCommands.compliment}`,
    ExampleText: `${baseCommand}${BogCommands.compliment}`,
  },
};
