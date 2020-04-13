"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _snoowrap = _interopRequireDefault(require("snoowrap"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const _getWritingPrompt = () => {
  const reddit = new _snoowrap.default({
    userAgent: process.env.REDDIT_USER_AGENT,
    clientId: process.env.REDDIT_APP_ID,
    clientSecret: process.env.REDDIT_APP_SECRET,
    username: process.env.REDDIT_USERNAME,
    password: process.env.REDDIT_PASSWORD
  });
  return reddit.getSubreddit("WritingPrompts").getRandomSubmission();
};

const RedditService = {
  getWritingPrompt: _getWritingPrompt
};
var _default = RedditService;
exports.default = _default;