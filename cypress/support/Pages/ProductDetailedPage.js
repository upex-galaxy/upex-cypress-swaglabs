export class ProductDetailedPage{
    constructor() {
        this.shoppingcartbutton = 'a[class="shopping_cart_link"';
    }

    checkDescription(description) {
        return cy.get('div[class="inventory_item_desc"]')
        .contains(description);
    }
    checkPrice(price) {
        return cy.get('div[class="inventory_item_price"]')
            .contains(price);
    }
    checkProduct(productname) {
        return cy.get('div[class="inventory_item_name"]')
            .contains(productname);
    }
    addProductocart(productID) {
        cy.get(`button[id="add-to-cart-sauce-labs-${productID}"]`).click();
    }
    gotoShoppingcart() {
        cy.get(this.shoppingcartbutton).click();
    }
}