import { loginSwagLabs } from "@pages/pom-GX-19162";

const baseUrl = Cypress.env('baseUrl')
const endpointInventory = Cypress.env('swagLabs').endpoint.inventory
const endpointCart = Cypress.env('swagLabs').endpoint.cart
const endpointStepOne = Cypress.env('swagLabs').endpoint.checkoutOne
const endpointStepTwo = Cypress.env('swagLabs').endpoint.checkoutTwo
const endpointComplete = Cypress.env('swagLabs').endpoint.checkoutAll
const inventoryErrorMessage = Cypress.env('swagLabs').login.errorMsg.inventoryError
const cartErrorMessage = Cypress.env('swagLabs').login.errorMsg.cartError
const checkoutOneErrorMessage = Cypress.env('swagLabs').login.errorMsg.checkoutOneError
const checkoutTwoErrorMessage = Cypress.env('swagLabs').login.errorMsg.checkoutTwoError
const checkoutAllErrorMessage = Cypress.env('swagLabs').login.errorMsg.checkoutAllError
const lockedUserMessage = Cypress.env('swagLabs').login.errorMsg.lockedUser
const passOrUserNotMatchMessage = Cypress.env('swagLabs').login.errorMsg.PassOrUserInv
const userRequiredMessage = Cypress.env('swagLabs').login.errorMsg.UserNull
const passRequiredMessage = Cypress.env('swagLabs').login.errorMsg.PassNull
const standardUser = Cypress.env('swagLabs').login.users.correctUser
const lockedUser = Cypress.env('swagLabs').login.users.lockUser
const problemUser = Cypress.env('swagLabs').login.users.problemUser
const performanceUser = Cypress.env('swagLabs').login.users.glitchUser
const password = Cypress.env('swagLabs').login.users.correctPass

describe('SwagLabs | Account | Login and access to BR', function () {
    
    before(() => {
        cy.fixture('data/data-GX-19162').then(fxt => { this.fxt = fxt })
    })

    it('19163 | TC1: Validate login successfully', () => {
        //username Standard_user
        loginSwagLabs.typeLogin(standardUser, password)
        loginSwagLabs.element.cards().should('be.visible')
        cy.url().should('contain', endpointInventory)

        //username performance_glitch_user
        loginSwagLabs.typeLogin(performanceUser, password)
        loginSwagLabs.element.cards().should('be.visible')
        cy.url().should('contain', endpointInventory)
        
        //username problem_user
        loginSwagLabs.typeLogin(problemUser, password)
        loginSwagLabs.element.cards().should('be.visible')
        cy.url().should('contain', endpointInventory)
    })
    it('19163 | TC2: Validate try login with bloked account.', () => {
        //username locked_out_user
        loginSwagLabs.typeLogin(lockedUser, password)
        loginSwagLabs.element.errorMessages().should('contain', lockedUserMessage)
        cy.url().should('not.contain', endpointInventory)
    })
    it('19163 | TC3: Validate try login with incorrect or non existent account.', () => {
        const nonExistentUser = this.fxt.nonExistentUser
        const adminUser = this.fxt.adminUser
        const admin123User = this.fxt.admin123User
        const longUser = this.fxt.longUser
        const adminPassword = this.fxt.adminPassword

        //username new-user_*56--CH
        loginSwagLabs.typeLogin(nonExistentUser, password)
        loginSwagLabs.element.errorMessages().should('contain', passOrUserNotMatchMessage)
        cy.url().should('not.contain', endpointInventory)

        //username admin
        loginSwagLabs.typeLogin(adminUser, password)
        loginSwagLabs.element.errorMessages().should('contain', passOrUserNotMatchMessage)
        cy.url().should('not.contain', endpointInventory)

        //username admin123
        loginSwagLabs.typeLogin(admin123User, password)
        loginSwagLabs.element.errorMessages().should('contain', passOrUserNotMatchMessage)
        cy.url().should('not.contain', endpointInventory)

        //username admin password admin123
        loginSwagLabs.typeLogin(adminUser, adminPassword)
        loginSwagLabs.element.errorMessages().should('contain', passOrUserNotMatchMessage)
        cy.url().should('not.contain', endpointInventory)

        //username admin123 password admin123
        loginSwagLabs.typeLogin(admin123User, adminPassword)
        loginSwagLabs.element.errorMessages().should('contain', passOrUserNotMatchMessage)
        cy.url().should('not.contain', endpointInventory)

        //username fffffffffffffffffffffffffkkkkkkkkkkkkkkkkkkkkkkkkkkkkkhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhaaaaaaaaaaaaaaaaaaaaaa111111
        loginSwagLabs.typeLogin(longUser, password)
        loginSwagLabs.element.errorMessages().should('contain', passOrUserNotMatchMessage)
        cy.url().should('not.contain', endpointInventory)
    })
    it('19163 | TC4: Validate try login with empty username field.', () => {
        loginSwagLabs.typeLogin('', password)
        loginSwagLabs.element.errorMessages().should('contain', userRequiredMessage)
        cy.url().should('not.contain', endpointInventory)
    })
    it('19163 | TC5: Validate try login with empty password field.', () => {
         const nonExistentUser = this.fxt.nonExistentUser

        //username standard_user
        loginSwagLabs.typeLogin(standardUser, '')
        loginSwagLabs.element.errorMessages().should('contain', passRequiredMessage)
        cy.url().should('not.contain', endpointInventory)

        //username performance_glitch_user
        loginSwagLabs.typeLogin(performanceUser, '')
        loginSwagLabs.element.errorMessages().should('contain', passRequiredMessage)
        cy.url().should('not.contain', endpointInventory)

        //username problem_user
        loginSwagLabs.typeLogin(problemUser, '')
        loginSwagLabs.element.errorMessages().should('contain', passRequiredMessage)
        cy.url().should('not.contain', endpointInventory)

        //username new-user_*56--CH
        loginSwagLabs.typeLogin(nonExistentUser, '')
        loginSwagLabs.element.errorMessages().should('contain', passRequiredMessage)
        cy.url().should('not.contain', endpointInventory)
    })
    it('19163 | TC6: Validate try login with empty both fields.', () => {
        loginSwagLabs.typeLogin('', '')
        loginSwagLabs.element.errorMessages().should('contain', userRequiredMessage)
        cy.url().should('not.contain', endpointInventory)
    })
    it('19163 | TC7: Validate try visit endpoint /inventory.html without login.', () => {
        loginSwagLabs.notAuthorizedEndpoint(endpointInventory)
        loginSwagLabs.element.errorMessages().should('contain', inventoryErrorMessage)
        cy.url().should('contain', baseUrl)
    })
    it('19163 | TC8: Validate try visit endpoint /cart.html without login.', () => {
        loginSwagLabs.notAuthorizedEndpoint(endpointCart)
        loginSwagLabs.element.errorMessages().should('contain', cartErrorMessage)
        cy.url().should('contain', baseUrl)
    })
    it('19163 | TC9: Validate try visit endpoint /checkout-step-one.html without login.', () => {
        loginSwagLabs.notAuthorizedEndpoint(endpointStepOne)
        loginSwagLabs.element.errorMessages().should('contain', checkoutOneErrorMessage)
        cy.url().should('contain', baseUrl)
    })
    it('19163 | TC10: Validate try visit endpoint /checkout-step-two.html without login.', () => {
        loginSwagLabs.notAuthorizedEndpoint(endpointStepTwo)
        loginSwagLabs.element.errorMessages().should('contain', checkoutTwoErrorMessage)
        cy.url().should('contain', baseUrl)
    })
    it('19163 | TC11: Validate try visit endpoint /checkout-complete.html without login.', () => {
        loginSwagLabs.notAuthorizedEndpoint(endpointComplete)
        loginSwagLabs.element.errorMessages().should('contain', checkoutAllErrorMessage)
        cy.url().should('contain', baseUrl)
    })
})