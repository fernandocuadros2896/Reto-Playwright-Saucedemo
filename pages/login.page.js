class LoginPage {
  constructor(page) {
    this.page = page;
    this.username = '#user-name';
    this.password = '#password';
    this.loginBtn = '#login-button';
    this.title = '.title';
    this.errorMessage = 'h3[data-test="error"]';
  }

  async navigate() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(user, pass) {
    await this.page.fill(this.username, user);
    await this.page.fill(this.password, pass);
    await this.page.click(this.loginBtn);
  }

  async getTitle() {
    return await this.page.textContent(this.title);
  }

  async getErrorMessage() {
    return await this.page.textContent(this.errorMessage);
  }
}

module.exports = LoginPage;