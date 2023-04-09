export class LoginPage {
  itemsListPage = () => cy.get(`[class="app_logo"]`).contains("Swag Labs");
  usernameField = () => cy.get(`input[data-test="username"]`);
  passwordField = () => cy.get(`input[data-test="password"]`);
  loginButton = () => cy.get(`input[data-test="login-button"]`);

  wrongCombination() {
    cy.get("h3")
      .contains(
        "Epic sadface: Username and password do not match any user in this service"
      )
      .should("be.visible");
  }

  noPassword() {
    cy.get("h3")
      .contains("Epic sadface: Password is required")
      .should("be.visible");
  }

  noUsername() {
    cy.get("h3")
      .contains("Epic sadface: Username is required")
      .should("be.visible");
  }

  sucessfulLogin() {
    this.itemsListPage().should("be.visible");
  }

  enterUsernameAndPassword(name, password) {
    this.usernameField().type(name);
    this.passwordField().type(password);
  }

  loginButtonClicked() {
    this.loginButton().click();
  }

  enterOnlyUsername(name) {
    this.usernameField().type(name);
  }

  enterOnlyPassword(password) {
    this.passwordField().type(password);
  }

  accessLoginModal() {
    cy.visit("/");
    cy.get(`[class="login_logo"]`).contains("Swag Labs");
  }
}
