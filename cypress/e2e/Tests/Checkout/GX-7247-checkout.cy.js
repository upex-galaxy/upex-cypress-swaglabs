import { faker } from '@faker-js/faker';
import { Login } from '@pages/loginFranco.Page'
import { Inventory } from '@pages/inventory.Page'
import { Cart } from '@pages/cart.Page'
import { CheckoutStepOne } from '@pages/checkoutStepOne.Page'
const {checkout, endpoint} = Cypress.env('swagLabs')
const {baseUrl} = Cypress.env()

describe("SwagLabs | Checkout Info | Insert buyer information.",()=>{
    beforeEach("PRC: User logged, add product to shopping cart and situated shopping cart",()=>{
        cy.Login('standard_user', 'secret_sauce')
        cy.visit(baseUrl + endpoint.inventory, {failOnStatusCode:false})
        Inventory.selectProductAndAddToCart() + Inventory.clickOnCart()
        Cart.clickCheckout()


    })

    it("GX-7248 | TC1:  Validate User successfully completes checkout form. (Happy Path).",()=>{
        cy.visit(baseUrl + endpoint.checkoutOne, {failOnStatusCode: false})
        CheckoutStepOne.enterFirstName(faker.name.firstName())
        CheckoutStepOne.enterLastName(faker.name.lastName())
        CheckoutStepOne.enterPostalCode(faker.address.zipCode('#####'))
        CheckoutStepOne.clickContinue()
        cy.url().should('contain', endpoint.checkoutTwo)
    })

    it("GX-7248 | TC2:  Validate User enters null data in the form field [First Name].",()=>{
        cy.visit(baseUrl + endpoint.checkoutOne, {failOnStatusCode: false})
        //FIRST NAME NULL
        CheckoutStepOne.enterLastName(faker.name.lastName())
        CheckoutStepOne.enterPostalCode(faker.address.zipCode('#####'))
        CheckoutStepOne.clickContinue()
        CheckoutStepOne.get.error().should('contain', checkout.firstNameError)
        cy.url().should('contain', endpoint.checkoutOne)
        
    })
    
    it("GX-7248 | TC3:  Validate User enters null data in the form field [Last Name].",()=>{
        cy.visit(baseUrl + endpoint.checkoutOne, {failOnStatusCode: false})
        CheckoutStepOne.enterFirstName(faker.name.firstName())
        //LAST NAME NULL
        CheckoutStepOne.enterPostalCode(faker.address.zipCode('#####'))
        CheckoutStepOne.clickContinue()
        CheckoutStepOne.get.error().should('contain', checkout.lastNameError)
        cy.url().should('contain', endpoint.checkoutOne)
    })
    
    it("GX-7248 | TC4:  Validate User enters null data in the form field [Postal Code]",()=>{
        cy.visit(baseUrl + endpoint.checkoutOne, {failOnStatusCode: false})
        CheckoutStepOne.enterFirstName(faker.name.firstName())
        CheckoutStepOne.enterLastName(faker.name.lastName())
        //POSTAL CODE NULL.
        CheckoutStepOne.clickContinue()
        CheckoutStepOne.get.error().should('contain', checkout.postalCodeError)
        cy.url().should('contain', endpoint.checkoutOne)
    })
    
    it.skip("GX-7248 | TC5:  Validate user enters special characters in the form fields [First, Last, Postal Code].",()=>{
        //NEGATIVE TEST CASE SINCE FILLING IN THE FORM WITH SPECIAL CHARACTERS DOES NOT FLAG ANY ERROR AND ALLOWS YOU TO GO TO THE NEXT STAGE
        cy.visit(baseUrl + endpoint.checkoutOne, {failOnStatusCode: false})
        CheckoutStepOne.enterFirstName(faker.datatype.string())
        CheckoutStepOne.enterLastName(faker.datatype.string())
        CheckoutStepOne.enterPostalCode(faker.datatype.string())
        CheckoutStepOne.clickContinue()
        cy.url().should('contain', endpoint.checkoutTwo)
    })
    
    it.skip("GX-7248 | TC6:  Validate User enters numeric characters in the form fields [First, Last, Postal Code].",()=>{
        //NEGATIVE TEST CASE SINCE FILLING IN THE FORM WITH NUMBERS DOES NOT FLAG ANY ERROR AND ALLOWS YOU TO GO TO THE NEXT STAGE
        cy.visit(baseUrl + endpoint.checkoutOne, {failOnStatusCode: false})
        CheckoutStepOne.enterFirstName(faker.datatype.number())
        CheckoutStepOne.enterLastName(faker.datatype.number())
        CheckoutStepOne.enterPostalCode(faker.datatype.number())
        CheckoutStepOne.clickContinue()
        cy.url().should('contain', endpoint.checkoutTwo)
    })
    
    it("GX-7248 | TC7: Validate User clicks on the “Cancel” button.)",()=>{
        cy.visit(baseUrl + endpoint.checkoutOne, {failOnStatusCode: false})
        CheckoutStepOne.enterFirstName(faker.name.firstName())
        CheckoutStepOne.enterLastName(faker.name.lastName())
        CheckoutStepOne.enterPostalCode(faker.address.zipCode('#####'))
        CheckoutStepOne.clickCancel()
        cy.url().should('contain', endpoint.cart)
    })
    
})