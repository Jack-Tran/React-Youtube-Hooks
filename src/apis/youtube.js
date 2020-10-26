import axios from "axios";

const KEY = "AIzaSyAfe1OnNj-Zmq-BOzvARfAbzMRsZwD8m4Y";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
