export class ShoppingCartPage{

    constructor() {
        this.inventoryItemName = '.inventory_item_name';
        this.inventoryItemDesc = '.inventory_item_desc';
        this.inventoryItemPrice = '.inventory_item_price';
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

}