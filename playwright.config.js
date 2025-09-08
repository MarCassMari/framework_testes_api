const { defineConfig } = require("@playwright/test");
dotenv = require("dotenv");
dotenv.config();

module.exports = defineConfig({
  use: {
    baseURL: process.env.BASE_URL || "https://api.example.com",
  },
});
