class ProductsPage {
  constructor(page) {
    this.page = page;
    this.cartBadge = '.shopping_cart_badge';
    this.cartLink = '.shopping_cart_link';
    this.backpackAddButton = '#add-to-cart-sauce-labs-backpack';
  }

  async addProductToCart(productName) {
    if (productName === 'Sauce Labs Backpack') {
      await this.page.click(this.backpackAddButton);
    }
  }

  async getCartBadgeText() {
    return await this.page.textContent(this.cartBadge);
  }

  async goToCart() {
    await this.page.click(this.cartLink);
  }
}

module.exports = ProductsPage;