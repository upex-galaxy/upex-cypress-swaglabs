describe("SwagLabs | PLP PDP | Remover productos del SCP desde el PLP y PDP", () => {

    beforeEach("Precondición: el usuario se encuentra logueado y previamente tiene uno o más productos añadidos al carrito de compras", () => {
        cy.goToLogin()
    })

    it("US-GX-1164 | TS 1165 | TC1: Validar remover un producto del shopping cart desde el PLP", () => {
        cy.removeProductPLP()
    })

    it("US-GX-1164 | TS 1165 | TC2: Validar remover un producto del shopping cart desde el PDP", () => {
        cy.removeProductPDP()
    })
})