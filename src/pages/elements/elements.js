const Elements = {
  //Login Page
  usernameField: '//android.widget.EditText[@content-desc="test-Username"]',
  passwordField: "~test-Password",
  loginBtn: "~test-LOGIN",
  errorMessage:
    '//android.view.ViewGroup[@content-desc="test-Error message"]/android.widget.TextView',

  //Items Page
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
  btn_Remove: '//android.view.ViewGroup[@content-desc="test-REMOVE"]',
  imgGrid:
    '(//android.view.ViewGroup[@content-desc="test-Item"])[1]/android.view.ViewGroup/android.widget.ImageView',
  titleGrid: '(//android.widget.TextView[@content-desc="test-Item title"])[1]',
  priceGrid: '(//android.widget.TextView[@content-desc="test-Price"])[1]',

  //Detail Product
  imgproductDetail:
    '//android.view.ViewGroup[@content-desc="test-Image Container"]/android.widget.ImageView',
  back2productBtn:
    "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]",
  titleproductDetail:
    '//android.view.ViewGroup[@content-desc="test-Description"]/android.widget.TextView[1]',
  descproductDetail:
    '//android.view.ViewGroup[@content-desc="test-Description"]/android.widget.TextView[2]',
  priceDetail: "~test-Price",
  add2cartBtnDetail:
    '//android.view.ViewGroup[@content-desc="test-ADD TO CART"]',

  //Cart Pages
  text_Title:
    '//android.view.ViewGroup[@content-desc="test-Description"]/android.widget.TextView[1]',
  $_Price:
    '//android.view.ViewGroup[@content-desc="test-Price"]/android.widget.TextView',
};

module.exports = Elements;
