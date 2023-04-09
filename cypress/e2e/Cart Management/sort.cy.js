import { LoginPage } from "../../support/pages/Login/login-page";
import {getStandardUser} from "../../fixtures/index";
import { SortPage } from "../../support/index";

const loginPage = new LoginPage();
const getUser = getStandardUser();
const sortPage = new SortPage();

describe("Sort", () => {
  beforeEach(() => {
    loginPage.accessLoginModal();
    loginPage.enterUsernameAndPassword(getUser.username, getUser.password);
    loginPage.loginButtonClicked();
  });

  it("Test that the logged-in user can sort list by price", () => {
    loginPage.sucessfulLogin();
    sortPage.sortByAffordability();
  });
});
