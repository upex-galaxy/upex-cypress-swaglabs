class ATC {
    get = {
        usernameInput: () => cy.get('#user-name'),
        passwordInput: () => cy.get('#password'),
        submitBtn: () => cy.get('#login-button'),
        addToCartItemBtn: () => cy.get('.btn_inventory'),
        shoppingCartBadge: () => cy.get('.shopping_cart_badge'),
        shoppingCartBtn: () => cy.get('#shopping_cart_container'),
        inventoryItemName: () => cy.get('.inventory_item_name'),
        inventoryItemDesc: () => cy.get('.inventory_item_desc'),
        inventoryItemPrice: () => cy.get('.inventory_item_price'),
    }
    enterUsername(value) {
        this.get.usernameInput().type(value)
    }
    enterPassword(value) {
        this.get.passwordInput().type(value)
    }
    selectRandomItem(){
        let randomItem
        return this.get.addToCartItemBtn().then(largo => {
            randomItem = Cypress._.random(0, largo.length - 1);
            this.get.addToCartItemBtn().eq(randomItem).click();
        }).then(() => {
            return randomItem
        })
        
    }

}
export const addToCart  = new ATC()