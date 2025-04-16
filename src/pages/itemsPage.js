const Elements = require("../pages/elements/elements");
class ItemsPage {
  constructor(driver) {
    this.driver = driver;
  }
  //Helper method untuk mengambil element
  async getElement(selector) {
    return await this.driver.$(selector);
  }

  //Helper method untuk cek apakah element ditampilkan
  async isElemenetDisplayed(selector) {
    let element = await this.getElement(selector);
    return await element.isDisplayed();
  }

  async isTextProductDisplayed() {
    return await this.isElemenetDisplayed(Elements.productsText);
  }
  async isSlideBtnDisplayed() {
    return await this.isElemenetDisplayed(Elements.slideBtn);
  }
  async isCardBtnDisplayed() {
    return await this.isElemenetDisplayed(Elements.cardBtn);
  }
  async isToggleBtnDisplayed() {
    return await this.isElemenetDisplayed(Elements.toggleBtn);
  }
  async isImgGridDisplayed() {
    return await this.isElemenetDisplayed(Elements.imgGrid);
  }
  async isTitleDisplayed() {
    return await this.isElemenetDisplayed(Elements.titleGrid);
  }
  async isPriceGridDisplayed() {
    return await this.isElemenetDisplayed(Elements.priceGrid);
  }
}

module.exports = ItemsPage;
