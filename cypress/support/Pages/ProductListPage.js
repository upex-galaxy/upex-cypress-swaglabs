export class ProductListPage{
    constructor() {
        this.cartcontainer = 'a[class="shopping_cart_link"]';  
    }
    GotoProduct(productname) {
        cy.get('div').contains(productname).click();
    }
    addProductocart(productID) {
        cy.get(`button[id="add-to-cart-sauce-labs-${productID}"]`).click();
    }
    clickAddtocart() {
        cy.get(this.cartcontainer).click();
    }

}