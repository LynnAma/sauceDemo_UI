export class ViewItemsPage {
  cartBadge = () => cy.get(`[class="shopping_cart_badge"]`);
  pageTitle = () => cy.get(`[class=title]`);

  viewCart() {
    this.cartBadge().click();
    this.pageTitle().contains("Your Cart").should("be.visible");
  }
}
