import dotenv from "dotenv";
dotenv.config();

const Authorization = {
  token: process.env.BOT_TOKEN,
};
export default Authorization;
