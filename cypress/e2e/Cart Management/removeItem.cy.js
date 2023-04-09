import { LoginPage } from "../../support/pages/Login/login-page";
import { AddItemPage } from "../../support/pages/Cart Management/addItem-page";
import { RemoveItemPage } from "../../support/pages/Cart Management/removeItem-page";

const loginPage = new LoginPage();
const addItemPage = new AddItemPage();
const removeItemPage = new RemoveItemPage();
let username = "standard_user";
let password = "secret_sauce";
describe("Remove Item to Cart", () => {
  beforeEach(() => {
    loginPage.accessLoginModal();
    loginPage.enterUsernameAndPassword(username, password);
    loginPage.loginButtonClicked();
  });

  it("Test that the logged-in user can remove items to the cart", () => {
    loginPage.sucessfulLogin();
    addItemPage.addTwoItems();
    removeItemPage.clickRemoveBackPack();
  });
});