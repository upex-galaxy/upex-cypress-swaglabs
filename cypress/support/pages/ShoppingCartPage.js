export class ShoppingCartPage{

    constructor() {
        this.inventoryItemName = '.inventory_item_name';
        this.inventoryItemDesc = '.inventory_item_desc';
        this.inventoryItemPrice = '.inventory_item_price';
        this.linkShoppingCart = 'a[class="shopping_cart_link"]';
        this.cartItem = 'div[class="cart_item"]';
        this.removeButton = '#remove-sauce-labs-backpack';
        this.shoppingCartBadge = 'span[class="shopping_cart_badge"]';
    }
    CheckInventoryName() {
        return cy.get(this.inventoryItemName);
    }
    CheckInventoryItemDesc() {
        return cy.get(this.inventoryItemDesc);
    }
    CheckInventoryItemPrice() {
        return cy.get(this.inventoryItemPrice);
    }
    ClickLinkShoppingCart() {
        cy.get(this.linkShoppingCart).click();
    }
    CheckCartItem() {
        cy.get(this.cartItem).should('exist');
    }
    CheckRemoveButton() {
        cy.get(this.removeButton).should('have.text', 'Remove')
    }
    CheckAddItemSC() {
        cy.get(this.shoppingCartBadge).should('exist').should('contain', '1')
    }

}