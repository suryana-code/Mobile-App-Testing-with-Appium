const ItemsPage = require("../pages/itemsPage");

async function runItemsTest(driver) {
  await driver.pause(3000);
  const itemPage = new ItemsPage(driver);
  console.log(await itemPage.isTextProductDisplayed());
  console.log(await itemPage.isSlideBtnDisplayed());
  console.log(await itemPage.isToggleBtnDisplayed());
  console.log(await itemPage.isImgGridDisplayed());
  console.log(await itemPage.isTitleDisplayed());
  console.log(await itemPage.isPriceGridDisplayed());
}

module.exports = runItemsTest;
