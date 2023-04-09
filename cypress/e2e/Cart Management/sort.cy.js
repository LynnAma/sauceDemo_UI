import { LoginPage } from "../../support/pages/Login/login-page";
import {getStandardUser} from "../../fixtures/index";
import { SortPage } from "../../support/pages/Cart Management/sort-page";

const loginPage = new LoginPage();
const getUser = getStandardUser();
const sortPage = new SortPage();

describe("Add Item to Cart", () => {
  beforeEach(() => {
    loginPage.accessLoginModal();
    loginPage.enterUsernameAndPassword(getUser.username, getUser.password);
    loginPage.loginButtonClicked();
  });

  it("Test that the logged-in user can add items to the cart", () => {
    loginPage.sucessfulLogin();
    sortPage.sortByAffordability();
  });
});
