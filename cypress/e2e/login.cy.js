describe('Login', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
    cy.get(`[class="login_logo"]`).contains('Swag Labs')
  })

  it('Test login with valid credentials that is the correct username and password combination', () => {
    cy.get(`input[data-test="username"]`).type('standard_user');
    cy.get(`input[data-test="password"]`).type('secret_sauce'); 
    cy.get(`input[data-test="login-button"]`).click();
    cy.get(`[class="app_logo"]`).contains('Swag Labs').should('be.visible')
  })

  it('Test that the user is unable to log in with an invalid password but a valid username combination', () => {
    cy.get(`input[data-test="username"]`).type('standard_user');
    cy.get(`input[data-test="password"]`).type('secret_saue'); 
    cy.get(`input[data-test="login-button"]`).click();
    cy.get("h3").contains('Epic sadface: Username and password do not match any user in this service').should('be.visible')
  })

  it('Test that the user is unable to log in with a valid password but an invalid username combination', () => {
    cy.get(`input[data-test="username"]`).type('standard_usr');
    cy.get(`input[data-test="password"]`).type('secret_sauce'); 
    cy.get(`input[data-test="login-button"]`).click();
    cy.get("h3").contains('Epic sadface: Username and password do not match any user in this service').should('be.visible')
  })

  it('Test that the user is unable to log in with an empty username but a valid password field', () => {
    cy.get(`input[data-test="password"]`).type('secret_sauce'); 
    cy.get(`input[data-test="login-button"]`).click();
    cy.get("h3").contains('Epic sadface: Username is required').should('be.visible')
  })

  it('Test that the user is unable to log in with an empty password', () => {
    cy.get(`input[data-test="username"]`).type('standard_user');
    cy.get(`input[data-test="login-button"]`).click();
    cy.get("h3").contains('Epic sadface: Password is required').should('be.visible')
  })

})