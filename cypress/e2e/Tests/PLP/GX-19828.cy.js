import { plpAndPdp } from '@pages/pom-GX-19828'

const baseUrl = Cypress.env('baseUrl')
const username = Cypress.env('swagLabs').login.users.correctUser
const password = Cypress.env('swagLabs').login.users.correctPass
const endpointPlp = Cypress.env('swagLabs').endpoint.inventory
const endpointPdp = Cypress.env('swagLabs').endpoint.cart

describe('', function () {
    
    beforeEach('User is in PLP page with one or more products add to the SC.', () => {
        let num = 3
        cy.visit(baseUrl)
        cy.typeLogin(username, password) //commands
        cy.url().should('contain', endpointPlp)
        cy.selectProduct(num) //commands
        plpAndPdp.element.linkCartIcon().should('contain', num)
    })
    //PLP = PRODUCT LIST PAGE AND PDP = PRODUCT DETAILS PAGE
    it('19829 | TC1: Validate remove one product of the SC from PLP.', () => {
        cy.url().should('contain', endpointPlp)
        plpAndPdp.removeProduct(1)
        plpAndPdp.element.linkCartIcon().should('contain', '2')
    })
    it('19829 | TC2: Validate remove more than one product of the SC from PLP.', () => {
        cy.url().should('contain', endpointPlp)
        plpAndPdp.removeProduct(2)
        plpAndPdp.element.linkCartIcon().should('contain', '1')
    })
    it('19829 | TC3: Validate remove one product of the SC from PDP.', () => {
        plpAndPdp.element.linkCartIcon().click()
        cy.url().should('contain', endpointPdp)
        plpAndPdp.removeProduct(1)
        plpAndPdp.element.linkCartIcon().should('contain', '2')
    })
    it('19829 | TC4: Validate remove more than one product of the SC from PDP.', () => {
        plpAndPdp.element.linkCartIcon().click()
        cy.url().should('contain', endpointPdp)
        plpAndPdp.removeProduct(2)
        plpAndPdp.element.linkCartIcon().should('contain', '1')
    })
    it('19829 | TC5: Validate remove all products of the SC from PLP.', () => {
        cy.url().should('contain', endpointPlp)
        plpAndPdp.removeProduct(3)
        plpAndPdp.element.linkCartIcon().should('contain', '')
    })
    it('19829 | TC6: Validate remove all products of the SC from PDP.', () => {
        plpAndPdp.element.linkCartIcon().click()
        cy.url().should('contain', endpointPdp)
        plpAndPdp.removeProduct(3)
        plpAndPdp.element.linkCartIcon().should('contain', '')
    })
})