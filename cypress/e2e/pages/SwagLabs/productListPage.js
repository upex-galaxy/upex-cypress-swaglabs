class productListPage {

    elements = {
        "shoppingCart_link": () => cy.get(".shopping_cart_link"),
        "shippingCartItems": () => cy.get(".shopping_cart_link span"),
        "productList": () => cy.get(".inventory_list .inventory_item"),
        "addToCart_buttonList":() => cy.get(".btn.btn_primary.btn_small.btn_inventory"),
        "remove_buttonList": () => cy.get(".btn.btn_secondary.btn_small.btn_inventory"),
        "productTitle": () => cy.get(".inventory_item_name"),
        "productDescription": () => cy.get(".inventory_item_desc"),
        "productPrice": () => cy.get(".inventory_item_price")
    }

}
module.exports = new productListPage()



// remover .btn.btn_secondary.btn_small.btn_inventory
// add .btn.btn_primary.btn_small.btn_inventory
