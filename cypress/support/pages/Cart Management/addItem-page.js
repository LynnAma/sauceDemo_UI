export class AddItemPage {
  addBagPack = () => cy.get(`[id="add-to-cart-sauce-labs-backpack"]`);
  addSauceLabBike = () => cy.get(`[id="add-to-cart-sauce-labs-bike-light"]`);
  cartBadge = () => cy.get(`[class="shopping_cart_badge"]`);

  addTwoItems() {
    this.addBagPack().click();
    this.addSauceLabBike().click();
    this.cartBadge().contains(2).should("be.visible");
  }
}
