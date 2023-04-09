import { LoginPage } from "../../support/index";
import { AddItemPage } from "../../support/index";
import { RemoveItemPage } from "../../support/index";
import {getStandardUser} from "../../fixtures/index"

const loginPage = new LoginPage();
const addItemPage = new AddItemPage();
const removeItemPage = new RemoveItemPage();
const getUser = getStandardUser();

describe("Remove Item to Cart", () => {
  beforeEach(() => {
    loginPage.accessLoginModal();
    loginPage.enterUsernameAndPassword(getUser.username, getUser.password);
    loginPage.loginButtonClicked();
  });

  it("Test that the logged-in user can remove items to the cart", () => {
    loginPage.sucessfulLogin();
    addItemPage.addTwoItems();
    removeItemPage.clickRemoveBackPack();
  });
});