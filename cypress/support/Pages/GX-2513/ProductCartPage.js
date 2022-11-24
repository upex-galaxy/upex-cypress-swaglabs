export class ProductCartPage{
    constructor() {
        this.checkoutbutton = 'button[id="checkout"]';
        this.backpackprice = 'div[class="inventory_item_price"]';
    }

    GotoCheckout() {
        cy.get(this.checkoutbutton).click();
    }
    BackpackPrice() {
        return cy.get(this.backpackprice);
    }
}