export class CartPage{
    constructor() {
        this.checkoutbutton = '//button[@id="checkout"]';
        this.backpackprice = 'div[class="inventory_item_price"]';
    }

    GotoCheckout() {
        cy.xpath(this.checkoutbutton).click();
    }
    BackpackPrice() {
        return cy.get(this.backpackprice);
    }
}