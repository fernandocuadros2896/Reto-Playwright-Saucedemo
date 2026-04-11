class CartPage {
  constructor(page) {
    this.page = page;
    this.checkoutButton = '#checkout';
    this.cartItemNames = '.inventory_item_name';
  }

  async isProductVisible(productName) {
    const products = await this.page.locator(this.cartItemNames).allTextContents();
    return products.includes(productName);
  }

  async clickCheckout() {
    await this.page.click(this.checkoutButton);
  }
}

module.exports = CartPage;