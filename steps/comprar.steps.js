const { When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const ProductsPage = require('../pages/products.page');
const CartPage = require('../pages/cart.page');
const CheckoutPage = require('../pages/checkout.page');

When('agrega el producto {string} al carrito', async function (productName) {
  this.productsPage = new ProductsPage(this.page);
  await this.productsPage.addProductToCart(productName);
});

Then('el icono del carrito debe mostrar 1 producto', async function () {
  const badge = await this.productsPage.getCartBadgeText();
  assert.strictEqual(badge.trim(), '1');
});

When('navega al carrito de compras', async function () {
  this.productsPage = this.productsPage || new ProductsPage(this.page);
  await this.productsPage.goToCart();
  this.cartPage = new CartPage(this.page);
});

Then('debe ver el producto {string} en el carrito', async function (productName) {
  const isVisible = await this.cartPage.isProductVisible(productName);
  assert.strictEqual(isVisible, true);
});

When('inicia el checkout', async function () {
  this.cartPage = this.cartPage || new CartPage(this.page);
  await this.cartPage.clickCheckout();
  this.checkoutPage = new CheckoutPage(this.page);
});

When('completa sus datos con nombre {string}, apellido {string} y codigo postal {string}', async function (name, lastName, zipCode) {
  this.checkoutPage = this.checkoutPage || new CheckoutPage(this.page);
  await this.checkoutPage.fillCheckoutInformation(name, lastName, zipCode);
});

When('finaliza la compra', async function () {
  this.checkoutPage = this.checkoutPage || new CheckoutPage(this.page);
  await this.checkoutPage.finishPurchase();
});

Then('debe visualizar el mensaje de compra exitosa', async function () {
  const message = await this.checkoutPage.getConfirmationMessage();
  assert.strictEqual(message.trim(), 'Thank you for your order!');
});