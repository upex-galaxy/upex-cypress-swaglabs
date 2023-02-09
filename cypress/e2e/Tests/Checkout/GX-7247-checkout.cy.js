import { faker } from '@faker-js/faker';
import { Login } from '@pages/loginFranco.Page'
const {checkout, endpoint} = Cypress.env('swagLabs')
const {baseUrl} = Cypress.env()

describe("SwagLabs | Checkout Info | Insert buyer information.",()=>{
    beforeEach("PRC: User logged, add product to shopping cart and situated shopping cart",()=>{
        cy.SL('standard_user', 'secret_sauce')
        cy.visit(baseUrl + endpoint.inventory, {failOnStatusCode:false})
        Login.background()

    })

    it("GX-7248 | TC1:  Validate User successfully completes checkout form. (Happy Path).",()=>{
        cy.visit(baseUrl + endpoint.checkoutOne, {failOnStatusCode: false})
        Login.firstName(faker.name.firstName())
        Login.lastName(faker.name.lastName())
        Login.postalCode(faker.address.zipCode('#####'))
        Login.continue()
        cy.url().should('contain', endpoint.checkoutTwo)
    })

    it("GX-7248 | TC2:  Validate User enters null data in the form field [First Name].",()=>{
        cy.visit(baseUrl + endpoint.checkoutOne, {failOnStatusCode: false})
        //FIRST NAME NULL
        Login.lastName(faker.name.lastName())
        Login.postalCode(faker.address.zipCode('#####'))
        Login.continue()
        Login.get.error().should('contain', checkout.firstNameError)
        cy.url().should('contain', endpoint.checkoutOne)
        
    })
    
    it("GX-7248 | TC3:  Validate User enters null data in the form field [Last Name].",()=>{
        cy.visit(baseUrl + endpoint.checkoutOne, {failOnStatusCode: false})
        Login.firstName(faker.name.firstName())
        //LAST NAME NULL
        Login.postalCode(faker.address.zipCode('#####'))
        Login.continue()
        Login.get.error().should('contain', checkout.lastNameError)
        cy.url().should('contain', endpoint.inventory)
    })
    
    it("GX-7248 | TC4:  Validate User enters null data in the form field [Postal Code]",()=>{
        cy.visit(baseUrl + endpoint.checkoutOne, {failOnStatusCode: false})
        Login.firstName(faker.name.firstName())
        Login.lastName(faker.name.lastName())
        //POSTAL CODE NULL.
        Login.continue()
        Login.get.error().should('contain', checkout.postalCodeError)
        cy.url().should('contain', endpoint.inventory)
    })
    
    it.skip("GX-7248 | TC5:  Validate user enters special characters in the form fields [First, Last, Postal Code].",()=>{
        //NEGATIVE TEST CASE SINCE FILLING IN THE FORM WITH SPECIAL CHARACTERS DOES NOT FLAG ANY ERROR AND ALLOWS YOU TO GO TO THE NEXT STAGE
        cy.visit(baseUrl + endpoint.checkoutOne, {failOnStatusCode: false})
        Login.firstName(faker.datatype.string())
        Login.lastName(faker.datatype.string())
        Login.postalCode(faker.datatype.string())
        Login.continue()
        cy.url().should('contain', endpoint.checkoutTwo)
    })
    
    it.skip("GX-7248 | TC6:  Validate User enters numeric characters in the form fields [First, Last, Postal Code].",()=>{
        //NEGATIVE TEST CASE SINCE FILLING IN THE FORM WITH NUMBERS DOES NOT FLAG ANY ERROR AND ALLOWS YOU TO GO TO THE NEXT STAGE
        cy.visit(baseUrl + endpoint.checkoutOne, {failOnStatusCode: false})
        Login.firstName(faker.datatype.number())
        Login.lastName(faker.datatype.number())
        Login.postalCode(faker.datatype.number())
        Login.continue()
        cy.url().should('contain', endpoint.checkoutTwo)
    })
    
    it("GX-7248 | TC7: Validate User clicks on the “Cancel” button.)",()=>{
        cy.visit(baseUrl + endpoint.checkoutOne, {failOnStatusCode: false})
        Login.firstName(faker.name.firstName())
        Login.lastName(faker.name.lastName())
        Login.postalCode(faker.address.zipCode('#####'))
        Login.cancel()
        cy.url().should('contain', endpoint.cart)
    })
    
})