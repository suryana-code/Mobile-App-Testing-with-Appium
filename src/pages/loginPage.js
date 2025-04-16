const Elements = require("../pages/elements/elements");
class LoginPage {
  constructor(driver) {
    this.driver = driver;
  }

  //Helper get element
  async getElement(selector) {
    return await this.driver.$(selector);
  }

  async enterUsername(username) {
    const element = await this.getElement(Elements.usernameField);

    await element.click();
    await element.clearValue();
    await element.setValue(username);
  }

  async enterPassword(password) {
    const element = await this.getElement(Elements.passwordField);
    await element.click();
    await element.clearValue();
    await element.setValue(password);
  }

  async clickLogin() {
    const element = await this.getElement(Elements.loginBtn);
    await element.click();
  }

  async isErrorDisplayed() {
    const element = await this.getElement(Elements.errorMessage);
    return await element.isDisplayed();
  }
}

module.exports = LoginPage;
