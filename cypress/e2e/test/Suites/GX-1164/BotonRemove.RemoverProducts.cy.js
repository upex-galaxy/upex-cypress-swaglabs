describe("SwagLabs | PLP PDP | Remover productos del SCP desde el PLP y PDP", () => {

    let selectedItem;

    beforeEach("Precondición: el usuario se encuentra logueado y previamente tiene uno o más productos añadidos al carrito de compras", () => {
        cy.userIsloggedIn()
        // cy.addProductToCart()
    })

    it("US-GX-1164 | TS 1165 | TC1: Validar remover un producto del shopping cart desde el PLP", () => {
        cy.addProductCustom(6)
    })

    /* it("US-GX-1164 | TS 1165 | TC2: Validar remover un producto del shopping cart desde el PDP", () => {
        cy.removeProductPDP()
    })

    it("US-GX-1164 | TS 1165 | TC3: Validar remover varios producto del shopping cart desde el PLP", () => {
        cy.removeProductsPLP()
    }) */

   /*  it("US-GX-1164 | TS 1165 | TC4: Validar remover un producto del shopping cart desde el SCP", () => {
        cy.removeProductSCP()
    }) */
})
