const { remote } = require("webdriverio");
const { wdOpts } = require("../../config");

const runLoginTest = require("../../tests/loginTest");
const runItemsTest = require("../../tests/itemsTest");
const runAdd2Cart = require("../../tests/addCartTest");

async function runTest() {
  const driver = await remote(wdOpts);
  try {
    console.log("Run login test");
    await runLoginTest(driver);

    // console.log("Run verifikasi items list");
    // await runItemsTest(driver);

    console.log("RUN!!!: open product detail & add to cart");
    await runAdd2Cart(driver);
  } catch (error) {
    console.error("⚠️⚠️⚠️ ERROR: ", error);
  } finally {
    // await driver.deleteSession();
  }
}

runTest().catch(console.error);
