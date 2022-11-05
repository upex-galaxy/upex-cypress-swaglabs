export class ProductsPage{
    constructor() {
        this.addtocartkbutton = '//button[@id="add-to-cart-sauce-labs-backpack"]';
        this.backpack= '//div[text()="Sauce Labs Backpack"]'
        this.cartcontainer = 'a[class="shopping_cart_link"]';
        
    }

    addtocartbutton() {
        cy.xpath(this.addtocartkbutton).click();
    }

    GotobackPack() {
        return cy.xpath(this.backpack).click();
    }

    clickShoppingcart() {
        cy.get(this.cartcontainer).click();
    }
}