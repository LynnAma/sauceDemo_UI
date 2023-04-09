import { LoginPage } from "../../support/pages/Login/login-page";
import { AddItemPage } from "../../support/pages/Cart Management/addItem-page";

const loginPage = new LoginPage();
const addItemPage = new AddItemPage();
let username = "standard_user";
let password = "secret_sauce";
describe("Login", () => {
  beforeEach(() => {
    loginPage.accessLoginModal();
    loginPage.enterUsernameAndPassword(username, password);
    loginPage.loginButtonClicked();
  });

  it("Test that the logged-in user can add items to the cart", () => {
    loginPage.sucessfulLogin();
    addItemPage.addTwoItems();
  });
});
