const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const LoginPage = require('../pages/login.page');

Given('el usuario abre la pagina de SauceDemo', async function () {
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.navigate();
});

When('inicia sesion con usuario {string} y clave {string}', async function (user, pass) {
  await this.loginPage.login(user, pass);
});

Then('debe visualizar la pagina de productos', async function () {
  const title = await this.loginPage.getTitle();
  assert.strictEqual(title.trim(), 'Products');
});

Then('debe visualizar un mensaje de error de login', async function () {
  const errorMessage = await this.loginPage.getErrorMessage();
  assert.ok(errorMessage.includes('Username and password do not match'));
});

Then('debe visualizar un mensaje de usuario bloqueado', async function () {
  const errorMessage = await this.loginPage.getErrorMessage();
  assert.ok(errorMessage.includes('Sorry, this user has been locked out'));
});