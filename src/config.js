const wdOpts = {
  path: "/wd/hub",
  port: 4723,
  capabilities: {
    platformName: "Android",
    "appium:automationName": "UiAutomator2",
    "appium:appPackage": "com.swaglabsmobileapp",
    "appium:appActivity": "com.swaglabsmobileapp.MainActivity",
  },
};

module.exports = { wdOpts };
