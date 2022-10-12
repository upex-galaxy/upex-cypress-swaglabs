describe("SwagLabs | PLP PDP | Remover productos del SCP desde el PLP y PDP", () => {

    let selectedItem, listRandom, numOfProducts

    beforeEach("Precondición: el usuario se encuentra logueado y previamente tiene uno o más productos añadidos al carrito de compras", () => {
        cy.userIsloggedIn() //loguea al usuario
        cy.addProductCustom(3) //añade n productos al SCP
    })

    it("US-GX-1164 | TS 1165 | TC1: Validar remover uno o mas productos del shopping cart desde el PLP", () => {
        cy.removeCustomProductsPLP() //elimina n productos desde PLP
    })

    it("US-GX-1164 | TS 1165 | TC2: Validar remover uno o mas productos del shopping cart desde el PDP", () => {
        cy.removeCustomProductsPDP() //elimina n productos desde PDP
    })

    it("US-GX-1164 | TS 1165 | TC3: Validar remover uno o mas productos del shopping cart desde el SCP", () => {
        cy.removeCustomProductsSCP() //elimina n productos desde SCP
    }) 
})
