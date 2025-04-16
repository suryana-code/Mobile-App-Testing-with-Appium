const Elements = require("../pages/elements/elements");
class AddCardtPage {
  constructor(driver) {
    this.driver = driver;
  }
  /** //syntx untuk menampilkan actions pada WebdriverIO, sementara bisa digunakan, setelah itu bisa untuk remove
   * @param {string} selector - XPath atau ID elemen
   * @returns {Promise<WebdriverIO.Element>}
   */

  //Helper for get element
  async getElement(selector) {
    return await this.driver.$(selector);
  }

  //Helper method check lement displayed
  async isElementDisplayed(selector) {
    try {
      const element = await this.getElement(selector);
      return (await element.isExisting()) ? await element.isDisplayed() : false;
    } catch (error) {
      console.warn(`⚠️ Element ${selector} not found:`, error.message);
      return false;
    }
  }

  //Example : setelah login, user melakukan fungsi masuk ke detial produk, kemudian melakukan add to cart dan memastikan produk tersebut benar sudah masuk ke halaman cart
  async add2CartPage() {
    const titleGrid = await this.getElement(Elements.titleGrid);
    const valueTitleProductInList = await titleGrid.getText();
    await titleGrid.click();

    const elementsToCheck = {
      imgproductDetail: Elements.imgproductDetail,
      titleproductDetail: Elements.titleproductDetail,
      descproductDetail: Elements.descproductDetail,
    };

    const results = {};
    for (const [key, selector] of Object.entries(elementsToCheck)) {
      results[key] = await this.isElementDisplayed(selector);
    }

    const back2productBtn = await this.getElement(Elements.back2productBtn);
    await back2productBtn.click();

    const add2cardBtn = await this.getElement(Elements.add2cardBtn);
    await add2cardBtn.click();

    const btn_Remove = await this.getElement(Elements.btn_Remove);
    await btn_Remove.isDisplayed();

    const cardBtn = await this.getElement(Elements.cardBtn);
    await cardBtn.click();

    const text_Title = await this.getElement(Elements.text_Title);
    const valueTitleInCard = await text_Title.getText();

    if (valueTitleProductInList === valueTitleInCard) {
      console.log("✅ Product Title True = ", valueTitleProductInList);
    } else {
      console.log(
        "❌ Product Title not suitable, Title product list =",
        valueTitleProductInList,
        "title in cart =",
        valueTitleInCard
      );
    }

    console.log("✅ element visible", results);
    return results;
  }
}

module.exports = AddCardtPage;
