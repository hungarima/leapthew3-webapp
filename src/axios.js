import axios from "axios";
import config from "./config";

export default axios.create({
  baseURL : config.rootPath,
  withCredentials: true // từ lần 2, session sẽ tự động được gửi sang``
});