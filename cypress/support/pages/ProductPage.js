export class ProductPage{

    constructor() {
        this.addToCartButton = '#add-to-cart-sauce-labs-backpack';
        this.linkProduct = '#item_4_title_link';
    }
    
    ClickAddToCartButton(){
    cy.get(this.addToCartButton).click()
    }
    ClickLinkProduct() {
        return cy.get(this.linkProduct).click()
    }
}