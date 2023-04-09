export class RemoveItemPage {
  removeBackPack = () => cy.get(`[data-test="remove-sauce-labs-backpack"]`);
  addBagPack = () => cy.get(`[data-test="add-to-cart-sauce-labs-backpack"]`);
  cartBadge = () => cy.get(`[class="shopping_cart_badge"]`);

  clickRemoveBackPack() {
    this.removeBackPack().click();
    this.addBagPack().should("be.visible");
    this.cartBadge().contains(1).should("be.visible");
  }
}
