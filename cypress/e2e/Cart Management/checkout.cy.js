import { LoginPage } from "../../support/index";
import { AddItemPage } from "../../support/index";
import { getStandardUser } from "../../fixtures/index";
import { ViewItemsPage } from "../../support/index";
import { CheckOutPage } from "../../support/index";

const loginPage = new LoginPage();
const addItemPage = new AddItemPage();
const getUser = getStandardUser();
const viewCartPage = new ViewItemsPage();
const checkoutPage = new CheckOutPage();

describe("Checkout", () => {
  beforeEach(() => {
    loginPage.accessLoginModal();
    loginPage.enterUsernameAndPassword(getUser.username, getUser.password);
    loginPage.loginButtonClicked();
  });

  it("Test that the logged-in user can checkout items from cart", () => {
    loginPage.sucessfulLogin();
    addItemPage.addTwoItems();
    viewCartPage.viewCart();
    checkoutPage.navigateAndEnterDetails(
      getUser.firstName,
      getUser.lastName,
      getUser.zipCode
    );
    checkoutPage.verifyInfoAndCheckout();
  });
});
