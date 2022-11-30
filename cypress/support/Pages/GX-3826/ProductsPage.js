export class ProductsPage{

    constructor() {
        this.SelectProd = "[class='inventory_item']"
    }

    SelectProd(name) {
        cy.get(this.SelectProd).eq(name)
    }
}