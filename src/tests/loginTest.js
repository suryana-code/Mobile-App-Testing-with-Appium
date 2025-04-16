const LoginPage = require("../pages/loginPage");
const loginData = require("../data/loginData.json");

async function runLoginTest(driver) {
  const loginPage = new LoginPage(driver);

  await driver.pause(3000);

  //Invalid Login
  console.log("Running invalid login page..");
  await loginPage.enterUsername(loginData.invalid.username);
  await loginPage.enterPassword(loginData.invalid.password);
  await loginPage.clickLogin();
  if (await loginPage.isErrorDisplayed()) {
    console.log("✅ Invalid Login Passed");
  } else {
    console.log("❌ Invalid Login Failed");
  }
  await driver.pause(2000);

  //Valid Login
  console.log("Running valid login page..");
  await loginPage.enterUsername(loginData.valid.username);
  await loginPage.enterPassword(loginData.valid.password);
  await loginPage.clickLogin();
  console.log("✅ Login Passed");
  await driver.pause(2000);
}

module.exports = runLoginTest;
