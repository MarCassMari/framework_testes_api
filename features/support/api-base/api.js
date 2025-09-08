const { request } = require("playwright");
const config = require("../../../playwright.config");

class ApiClient {
  constructor() {
    this.requestContext = null;
  }

  async init() {
    this.requestContext = await request.newContext({
      baseURL: config.use.baseURL,
      ignoreHTTPSErrors: true,
      extraHTTPHeaders: {
        Accept: "application/json",
      },
    });
  }

  async post(path, data) {
    if (!this.requestContext) await this.init();
    return this.requestContext.post(path, { data });
  }

  async get(path) {
    if (!this.requestContext) await this.init();
    return this.requestContext.get(path);
  }

  async dispose() {
    if (this.requestContext) {
      await this.requestContext.dispose();
    }
  }
}

module.exports = ApiClient;
