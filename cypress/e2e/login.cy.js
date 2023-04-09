describe('Login', () => {
  it('Test login with valid credentials that is the correct email and password combination', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get(`[class="login_logo"]`).contains('Swag Labs')
    cy.get(`input[data-test="username"]`).type('standard_user');
    cy.get(`input[data-test="password"]`).type('secret_sauce'); 
    cy.get(`input[data-test="login-button"]`).click();
    cy.get(`[class="app_logo"]`).contains('Swag Labs').should('be.visible')
  })
})