const add2CartPage = require("../pages/addCartPage");

async function runAdd2Cart(driver) {
  const add2chartpage = new add2CartPage(driver);

  await driver.pause(3000);

  //Product Detail
  console.log("Running add to cart");
  await add2chartpage.add2CartPage();
}

module.exports = runAdd2Cart;
