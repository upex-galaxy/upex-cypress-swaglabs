export class ProductsListPage{
    constructor() {
        this.cartcontainer = 'a[class="shopping_cart_link"]';  
        this.title = '[class="title"]';
    }
    GotoProduct(productname) {
        cy.get('div').contains(productname).click();
    }
    addProductocart(productID) {
        cy.get(`button[id="add-to-cart-sauce-labs-${productID}"]`).click();
    }
    GotoShoppingcart() {
        cy.get(this.cartcontainer).click();
    }
    Checktitle() {
        return cy.get('div').find(this.title)
    }

}