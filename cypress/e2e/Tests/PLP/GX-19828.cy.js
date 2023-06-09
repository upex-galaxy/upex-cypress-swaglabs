import { plpAndPdp } from '@pages/pom-GX-19828'

const baseUrl = Cypress.env('baseUrl')
const username = Cypress.env('swagLabs').login.users.correctUser
const password = Cypress.env('swagLabs').login.users.correctPass
const numProductoToSelect = 3

describe('US GX-19828 | TS: ✅SwagLabs | PLP PDP | Remover productos del SCP desde el PLP y PDP.', function () {
    
    beforeEach('User is logged with one or more products add to the SCP.', function() {
        cy.visit(baseUrl)
        cy.typeLogin(username, password) //commands
        plpAndPdp.selectProduct(numProductoToSelect)
        plpAndPdp.element.linkCartIcon().should('contain', numProductoToSelect)
    })
    //PLP = PRODUCT LIST PAGE / PDP = PRODUCT DETAILS PAGE / SCP = SHOPPING CART PAGE
    it('19829 | TC1: Validate remove one product of the SCP from PLP.', () => {
        plpAndPdp.removeProductPlp(1, numProductoToSelect)
    })
    it('19829 | TC2: Validate remove more than one product of the SCP from PLP.', () => {
        plpAndPdp.removeProductPlp(2, numProductoToSelect)
    })
    it('19829 | TC3: Validate remove one product of the SCP from PDP.', () => {
        plpAndPdp.removeProductPdp(1, numProductoToSelect)
    })
    it('19829 | TC4: Validate remove more than one product of the SCP from PDP.', () => {
        plpAndPdp.removeProductPdp(2, numProductoToSelect)
    })
    it('19829 | TC5: Validate remove all products of the SCP from PLP.', () => {
        plpAndPdp.removeProductPlp(3, numProductoToSelect)
    })
    it('19829 | TC6: Validate remove all products of the SCP from PDP.', () => {
        plpAndPdp.removeProductPdp(3, numProductoToSelect)
    })
})