const { setWorldConstructor } = require("@cucumber/cucumber");
const { request } = require("playwright");
const config = require("../../playwright.config");

class CustomWorld {
  constructor() {
    this.requestContext = null;
    this.response = null;
  }

  async createRequestContext() {
    this.requestContext = await request.newContext({
      baseURL: config.use.baseURL,
      ignoreHTTPSErrors: true,
      extraHTTPHeaders: {
        Accept: "application/json",
      },
    });
  }

  async disposeRequestContext() {
    if (this.requestContext) {
      await this.requestContext.dispose();
    }
  }
}

setWorldConstructor(CustomWorld);
