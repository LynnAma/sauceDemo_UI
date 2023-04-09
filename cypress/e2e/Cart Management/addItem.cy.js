import { LoginPage } from "../../support/pages/Login/login-page";
import { AddItemPage } from "../../support/index";
import { getStandardUser } from "../../fixtures/index";

const loginPage = new LoginPage();
const addItemPage = new AddItemPage();
const getUser = getStandardUser();

describe("Add Item to Cart", () => {
  beforeEach(() => {
    loginPage.accessLoginModal();
    loginPage.enterUsernameAndPassword(getUser.username, getUser.password);
    loginPage.loginButtonClicked();
  });

  it("Test that the logged-in user can add items to the cart", () => {
    loginPage.sucessfulLogin();
    addItemPage.addTwoItems();
  });
});
