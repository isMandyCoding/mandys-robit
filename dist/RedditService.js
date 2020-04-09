"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reddit = _interopRequireDefault(require("reddit"));

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const _getWritingPrompt = async () => {
  const redditOptions = {
    username: process.env.REDDIT_USERNAME,
    password: process.env.REDDIT_PASSWORD,
    appId: process.env.REDDIT_APP_ID,
    appSecret: process.env.REDDIT_APP_SECRET,
    userAgent: process.env.REDDIT_USER_AGENT
  };
  console.log("redditOptions: ", redditOptions); // const reddit = new Reddit(redditOptions);

  const redditSubredditURI = "/r/WritingPrompts/random";

  try {
    const response = await _axios.default.get("https://www.reddit.com/" + redditSubredditURI);
    console.log("response: ", response);
  } catch (_) {
    console.log("_: ", _);
    throw Error;
  }
};

const RedditService = {
  getWritingPrompt: _getWritingPrompt
};
var _default = RedditService;
exports.default = _default;