const { Given, When, Then } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");
const ApiClient = require("../../support/api-base/api");

const apiClient = new ApiClient();

Given("a API esta online", async function () {
  await apiClient.init();
});

When(
  "O usuario manda uma requisicao GET para ver todas as tarefas",
  async function () {
    this.response = await apiClient.get("/tasks");
  }
);

Then("A resposta do status deve ser 200", async function () {
  expect(this.response.status()).toBe(200);
});

Then("A resposta deve conter uma lista de tarefas", async function () {
  const responseBody = await this.response.json();
  expect(Array.isArray(responseBody)).toBe(true);
});
