import snoowrap from "snoowrap";

const _getWritingPrompt = () => {
  const reddit = new snoowrap({
    userAgent: process.env.REDDIT_USER_AGENT,
    clientId: process.env.REDDIT_APP_ID,
    clientSecret: process.env.REDDIT_APP_SECRET,
    username: process.env.REDDIT_USERNAME,
    password: process.env.REDDIT_PASSWORD,
  });
  return reddit.getSubreddit("WritingPrompts").getRandomSubmission();
};

const RedditService = {
  getWritingPrompt: _getWritingPrompt,
};

export default RedditService;
