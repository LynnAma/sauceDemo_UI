export class CheckOutPage{
    checkOutButton = () => cy.get(`[data-test="checkout"]`)
    firstNameField = () => cy.get(`[data-test="firstName"]`)
    lastNameField = () => cy.get(`[data-test="lastName"]`)
    zipCodeField = () => cy.get(`[data-test="postalCode"]`)
    continueButton = () => cy.get(`[data-test="continue"]`)
    finishButton = () => cy.get(`[data-test="finish"]`)
    finalPageTitle = () => cy.get(`[class="title"]`)
    cartTotal = () => cy.get(`[class="summary_info_label summary_total_label"]`)
    sucessMessage = () => cy.get('h2').contains("Thank you for your order!");
    finalMessage = () => cy.get(`[class="complete-text"]`).contains("Your order has been dispatched, and will arrive just as fast as the pony can get there!");    

    navigateAndEnterDetails(name, surName, zip){
       this.checkOutButton().click()
       this.firstNameField().type(name)
       this.lastNameField().type(surName)
       this.zipCodeField().type(zip)
       this.continueButton().click()
    }

    verifyInfoAndCheckout(){
     this.finalPageTitle().contains("Checkout: Overview").should('be.visible');
     this.cartTotal().contains("43.18").should('be.visible');
     this.finishButton().click()
     this.sucessMessage().should('be.visible')
     this.finalMessage().should('be.visible')
    }
}