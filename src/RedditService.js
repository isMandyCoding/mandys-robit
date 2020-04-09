import Reddit from "reddit";
import axios from "axios";

const _getWritingPrompt = async () => {
  // const redditOptions = {
  //   username: process.env.REDDIT_USERNAME,
  //   password: process.env.REDDIT_PASSWORD,
  //   appId: process.env.REDDIT_APP_ID,
  //   appSecret: process.env.REDDIT_APP_SECRET,
  //   userAgent: process.env.REDDIT_USER_AGENT,
  // };
  console.log("redditOptions: ", redditOptions);
  // const reddit = new Reddit(redditOptions);
  // const redditSubredditURI = "/r/WritingPrompts/random";
  // try {
  //   const response = await axios.get(
  //     "https://www.reddit.com/" + redditSubredditURI
  //   );
  //   console.log("response: ", response);
  // } catch (_) {
  //   console.log("_: ", _);
  //   throw Error;
  // }
};

const RedditService = {
  getWritingPrompt: _getWritingPrompt,
};

export default RedditService;
