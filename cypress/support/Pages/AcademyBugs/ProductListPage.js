export class ProductListPage{
    selectProduct(productname) {
        cy.get('h3[class$="ec_product_title_type1"]')
            .children()
            .contains(productname)
            .click();
    }
}