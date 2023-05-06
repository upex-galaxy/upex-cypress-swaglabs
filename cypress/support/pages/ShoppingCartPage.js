class ShoppingCartPage{

    constructor() {
        this.inventoryItemName = '.inventory_item_name';
        this.inventoryItemDesc = '.inventory_item_desc';
        this.inventoryItemPrice = '.inventory_item_price';
        this.linkShoppingCart = 'a[class="shopping_cart_link"]';
        this.cartItem = 'div[class="cart_item"]';
        this.removeButton = '[id^=remove]';
        this.shoppingCartBadge = 'span[class="shopping_cart_badge"]';
    }
    CheckInventoryName() {

        return cy.get(this.inventoryItemName)
       
        
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
    GetCartItem() {
        return cy.get(this.cartItem);
    }
    GetRemoveButton() {
        return cy.get(this.removeButton);
    }
    GetAddItemSC() {
        return cy.get(this.shoppingCartBadge);
    }

}

export const shoppingCartPage = new ShoppingCartPage();