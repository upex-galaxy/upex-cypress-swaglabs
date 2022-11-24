export class ProductListPage{
    selectProduct(productname) {
        cy.get('h3')
            .children('a[class="ec_image_link_cover"]')
            .contains(productname)
            .click({force:true});
    }
}