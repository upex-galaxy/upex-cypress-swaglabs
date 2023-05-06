class ProductDetailPage{

    constructor() {
        this.addToCartButton = '#add-to-cart-sauce-labs-backpack';
    }

    ClickAddToCartButton() {
    cy.get(this.addToCartButton).click()
}
}

export const productDetailPage = new ProductDetailPage()