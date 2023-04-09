export class SortPage{
    firstItemPrice = () => cy.get(`[class="inventory_item_price"]`)
    sortContainer = () => cy.get(`[data-test="product_sort_container"]`)
    
    sortByAffordability(){
        this.firstItemPrice().contains("$29.99").should('be.visible')
        this.sortContainer().select('Price (low to high)')
        this.firstItemPrice().contains("$7.99").should('be.visible')   
    }
}