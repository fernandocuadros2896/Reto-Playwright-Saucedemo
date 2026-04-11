class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.firstName = '#first-name';
    this.lastName = '#last-name';
    this.postalCode = '#postal-code';
    this.continueButton = '#continue';
    this.finishButton = '#finish';
    this.confirmationMessage = '.complete-header';
  }

  async fillCheckoutInformation(name, lastName, zipCode) {
    await this.page.fill(this.firstName, name);
    await this.page.fill(this.lastName, lastName);
    await this.page.fill(this.postalCode, zipCode);
    await this.page.click(this.continueButton);
  }

  async finishPurchase() {
    await this.page.click(this.finishButton);
  }

  async getConfirmationMessage() {
    return await this.page.textContent(this.confirmationMessage);
  }
}

module.exports = CheckoutPage;