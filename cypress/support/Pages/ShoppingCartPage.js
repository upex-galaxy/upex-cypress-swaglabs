export class ShoppingCartPage{
    constructor() {
        this.checkoutbutton = 'button[id="checkout"]';
    }

    GotoCheckout() {
        cy.get(this.checkoutbutton).click();
    }
    
    
}