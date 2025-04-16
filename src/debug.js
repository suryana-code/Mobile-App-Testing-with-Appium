class ItemsPage {
  constructor(driver) {
    this.driver = driver;
  }

  // Helper method untuk mengambil elemen
  async getElement(selector) {
    return await this.driver.$(selector);
  }

  // Helper method untuk cek apakah elemen ditampilkan
  async isElementDisplayed(selector) {
    let element = await this.getElement(selector);
    return await element.isDisplayed();
  }

  // **Elemen-elemen UI**
  elements = {
    productsText:
      '//android.view.ViewGroup[@content-desc="test-Cart drop zone"]/android.view.ViewGroup/android.widget.TextView',
    slideBtn:
      '//android.view.ViewGroup[@content-desc="test-Menu"]/android.view.ViewGroup/android.widget.ImageView',
    cardBtn:
      '//android.view.ViewGroup[@content-desc="test-Cart"]/android.view.ViewGroup/android.widget.ImageView',
    toggleBtn:
      '//android.view.ViewGroup[@content-desc="test-Toggle"]/android.widget.ImageView',
    filterBtn:
      '//android.view.ViewGroup[@content-desc="test-Modal Selector Button"]/android.view.ViewGroup/android.view.ViewGroup/android.widget.ImageView',
    add2cardBtn:
      '(//android.view.ViewGroup[@content-desc="test-ADD TO CART"])[1]',
    imgGrid:
      '(//android.view.ViewGroup[@content-desc="test-Item"])[1]/android.view.ViewGroup/android.widget.ImageView',
    titleGrid:
      '(//android.widget.TextView[@content-desc="test-Item title"])[1]',
    priceGrid: '(//android.widget.TextView[@content-desc="test-Price"])[1]',
  };

  // **Metode Aksi**
  async isTextProductDisplayed() {
    return await this.isElementDisplayed(this.elements.productsText);
  }

  async isSlideBtnDisplayed() {
    return await this.isElementDisplayed(this.elements.slideBtn);
  }

  async isCardBtnDisplayed() {
    return await this.isElementDisplayed(this.elements.cardBtn);
  }

  async isToggleBtnDisplayed() {
    return await this.isElementDisplayed(this.elements.toggleBtn);
  }

  async isFilterBtnDisplayed() {
    return await this.isElementDisplayed(this.elements.filterBtn);
  }

  async isImgGridDisplayed() {
    return await this.isElementDisplayed(this.elements.imgGrid);
  }

  async isTitleGridDisplayed() {
    return await this.isElementDisplayed(this.elements.titleGrid);
  }

  async isPriceGridDisplayed() {
    return await this.isElementDisplayed(this.elements.priceGrid);
  }
}

module.exports = ItemsPage;
