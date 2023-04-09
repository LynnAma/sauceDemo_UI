import { LoginPage } from "../../support/index";
import { getStandardUser } from "../../fixtures/index";
const loginPage = new LoginPage();

let wrongPassword = "secret_saue";
let wrongUsername = "standard_usr";

const getUser = getStandardUser();

describe("Login", () => {
  beforeEach(() => {
    loginPage.accessLoginModal();
  });

  it("Test login with valid credentials that is the correct username and password combination", () => {
    loginPage.enterUsernameAndPassword(getUser.username, getUser.password);
    loginPage.loginButtonClicked();
    loginPage.sucessfulLogin();
  });

  it("Test that the user is unable to log in with an invalid password but a valid username combination", () => {
    loginPage.enterUsernameAndPassword(getUser.username, wrongPassword);
    loginPage.loginButtonClicked();
    loginPage.wrongCombination();
  });

  it("Test that the user is unable to log in with a valid password but an invalid username combination", () => {
    loginPage.enterUsernameAndPassword(wrongUsername, getUser.password);
    loginPage.loginButtonClicked();
    loginPage.wrongCombination();
  });

  it("Test that the user is unable to log in with an empty username but a valid password field", () => {
    loginPage.enterOnlyPassword(getUser.password);
    loginPage.loginButtonClicked();
    loginPage.noUsername();
  });

  it("Test that the user is unable to log in with an empty password", () => {
    loginPage.enterOnlyUsername(getUser.username);
    loginPage.loginButtonClicked();
    loginPage.noPassword();
  });
});
