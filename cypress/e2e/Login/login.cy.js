import { LoginPage } from "../../support/pages/Login/login-page";

const loginPage = new LoginPage();

let username = "standard_user";
let password = "secret_sauce";
let wrongPassword = "secret_saue";
let wrongUsername = "standard_usr";

describe("Login", () => {
  beforeEach(() => {
    loginPage.accessLoginModal();
  });

  it("Test login with valid credentials that is the correct username and password combination", () => {
    loginPage.enterUsernameAndPassword(username, password);
    loginPage.loginButtonClicked();
    loginPage.sucessfulLogin();
  });

  it("Test that the user is unable to log in with an invalid password but a valid username combination", () => {
    loginPage.enterUsernameAndPassword(username, wrongPassword);
    loginPage.loginButtonClicked();
    loginPage.wrongCombination();
  });

  it("Test that the user is unable to log in with a valid password but an invalid username combination", () => {
    loginPage.enterUsernameAndPassword(wrongUsername, password);
    loginPage.loginButtonClicked();
    loginPage.wrongCombination();
  });

  it("Test that the user is unable to log in with an empty username but a valid password field", () => {
    loginPage.enterOnlyPassword(password);
    loginPage.loginButtonClicked();
    loginPage.noUsername();
  });

  it("Test that the user is unable to log in with an empty password", () => {
    loginPage.enterOnlyUsername(username);
    loginPage.loginButtonClicked();
    loginPage.noPassword();
  });
});
