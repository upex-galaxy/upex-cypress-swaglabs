class swagLabs{
    get = {
        usernameInput: () => cy.get('#user-name'),
        passwordInput: () => cy.get('#password'),
        loginBtn: () => cy.get('#login-button'),
        productText: () => cy.get('#item_1_title_link'),
        productImage: () => cy.get('#item_1_img_link [class="inventory_item_img"]'),
        detailsName: () => cy.get('.inventory_details_name'),
        detailsDescription: () => cy.get('.inventory_details_desc'),
        detailsPrice: () => cy.get('.inventory_details_price'),
        detailsBtn: () => cy.get('.btn_inventory'),
        detailsBackBtn: () => cy.get('#back-to-products'),
        detailsImage: () => cy.get('.inventory_details_img'),
        addtocartPlpBtn: () => cy.get('#add-to-cart-sauce-labs-bolt-t-shirt'),
        shoppingCartBtn: () => cy.get('.shopping_cart_link'),
        firstItemSCP: () => cy.get('#item_1_title_link'),
    }
    enterUsername(value) {
        this.get.usernameInput().type(value);
    }
    enterPassword(value) {
        this.get.passwordInput().type(value);
    }
}
export const productDetails = new swagLabs()