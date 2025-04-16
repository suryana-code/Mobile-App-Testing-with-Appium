const { remote } = require("webdriverio");
const { wdOpts } = require("../config"); //import configurations

async function login() {
  const driver = await remote(wdOpts);

  try {
    await driver.pause(5000);
    let textBox_username = await driver.$(
      '//android.widget.EditText[@content-desc="test-Username"]'
    );

    await textBox_username.click();
    await textBox_username.setValue("usernameadmin");

    let testBox_password = await driver.$("~test-Password");
    await testBox_password.click();
    await testBox_password.setValue("thispassword");

    let btn_login = await driver.$("~test-LOGIN");
    await btn_login.click();

    let txt_validation = await driver.$(
      '//android.view.ViewGroup[@content-desc="test-Error message"]/android.widget.TextView'
    );
    await txt_validation.isDisplayed();

    console.log("✅✅");
  } catch (error) {
    console.error("Terjadi Kesalahan", error);
    await driver.deleteSession();
  }
}
login().catch(console.error);
