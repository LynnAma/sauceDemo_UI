import { LoginPage } from "../../support/pages/Login/login-page";
import { AddItemPage } from "../../support/pages/Cart Management/addItem-page";
import {getStandardUser} from "../../fixtures/index";
import { ViewItemsPage } from "../../support/pages/Cart Management/viewCart-page";

const loginPage = new LoginPage();
const addItemPage = new AddItemPage();
const getUser = getStandardUser();
const viewCartPage = new ViewItemsPage();

describe("View Cart", () => {
  beforeEach(() => {
    loginPage.accessLoginModal();
    loginPage.enterUsernameAndPassword(getUser.username, getUser.password);
    loginPage.loginButtonClicked();
  });

  it("Test that the logged-in user can add items to the cart and view added items", () => {
    loginPage.sucessfulLogin();
    addItemPage.addTwoItems();
    viewCartPage.viewCart();
  });
});
