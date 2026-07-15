const axios = require("axios");

const api = axios.create({
  baseURL: "https://football-highlights-api.p.rapidapi.com",

  headers: {
    "x-rapidapi-key": process.env.RAPID_API_KEY,
    "x-rapidapi-host": process.env.RAPID_API_HOST
  },

  timeout: 10000
});

module.exports = api;
