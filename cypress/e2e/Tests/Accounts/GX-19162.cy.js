import { loginSwagLabs } from "@pages/pom-GX-19162";

const baseUrl = Cypress.env('baseUrl')

describe('SwagLabs | Account | Login and access to BR', function () {
    
    before(() => {
        cy.fixture('data/data-GX-19162').then(fxt => { this.fxt = fxt })
    })

    it('19163 | TC1: Validate login successfully', () => {
        const standardUser = this.fxt.standardUser
        const performanceUser = this.fxt.performanceUser
        const problemUser = this.fxt.problemUser
        const password = this.fxt.password
        const endpointInventory = this.fxt.endpointInventory

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
        const lockedUser = this.fxt.lockedUser
        const password = this.fxt.password
        const lokcedUserMessage = this.fxt.lokcedUserMessage
        const endpointInventory = this.fxt.endpointInventory

        //username locked_out_user
        loginSwagLabs.typeLogin(lockedUser, password)
        loginSwagLabs.element.errorMessages().should('contain', lokcedUserMessage)
        cy.url().should('not.contain', endpointInventory)
    })
    it('19163 | TC3: Validate try login with incorrect or non existent account.', () => {
        const nonExistentUser = this.fxt.nonExistentUser
        const adminUser = this.fxt.adminUser
        const admin123User = this.fxt.admin123User
        const longUser = this.fxt.longUser
        const password = this.fxt.password
        const adminPassword = this.fxt.adminPassword
        const nonExistentUserMessage = this.fxt.nonExistentUserMessage
        const endpointInventory = this.fxt.endpointInventory

        //username new-user_*56--CH
        loginSwagLabs.typeLogin(nonExistentUser, password)
        loginSwagLabs.element.errorMessages().should('contain', nonExistentUserMessage)
        cy.url().should('not.contain', endpointInventory)

        //username admin
        loginSwagLabs.typeLogin(adminUser, password)
        loginSwagLabs.element.errorMessages().should('contain', nonExistentUserMessage)
        cy.url().should('not.contain', endpointInventory)

        //username admin123
        loginSwagLabs.typeLogin(admin123User, password)
        loginSwagLabs.element.errorMessages().should('contain', nonExistentUserMessage)
        cy.url().should('not.contain', endpointInventory)

        //username admin password admin123
        loginSwagLabs.typeLogin(adminUser, adminPassword)
        loginSwagLabs.element.errorMessages().should('contain', nonExistentUserMessage)
        cy.url().should('not.contain', endpointInventory)

        //username admin123 password admin123
        loginSwagLabs.typeLogin(admin123User, adminPassword)
        loginSwagLabs.element.errorMessages().should('contain', nonExistentUserMessage)
        cy.url().should('not.contain', endpointInventory)

        //username fffffffffffffffffffffffffkkkkkkkkkkkkkkkkkkkkkkkkkkkkkhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhaaaaaaaaaaaaaaaaaaaaaa111111
        loginSwagLabs.typeLogin(longUser, password)
        loginSwagLabs.element.errorMessages().should('contain', nonExistentUserMessage)
        cy.url().should('not.contain', endpointInventory)
    })
    it('19163 | TC4: Validate try login with empty username field.', () => {
        const password = this.fxt.password
        const emptyUserFieldMessage = this.fxt.emptyUserFieldMessage
        const endpointInventory = this.fxt.endpointInventory

        loginSwagLabs.typeLogin('', password)
        loginSwagLabs.element.errorMessages().should('contain', emptyUserFieldMessage)
        cy.url().should('not.contain', endpointInventory)
    })
    it('19163 | TC5: Validate try login with empty password field.', () => {
        const standardUser = this.fxt.standardUser
        const performanceUser = this.fxt.performanceUser
        const problemUser = this.fxt.problemUser
        const nonExistentUser = this.fxt.nonExistentUser
        const emptyPasswordFieldMessage = this.fxt.emptyPasswordFieldMessage
        const endpointInventory = this.fxt.endpointInventory

        //username standard_user
        loginSwagLabs.typeLogin(standardUser, '')
        loginSwagLabs.element.errorMessages().should('contain', emptyPasswordFieldMessage)
        cy.url().should('not.contain', endpointInventory)

        //username performance_glitch_user
        loginSwagLabs.typeLogin(performanceUser, '')
        loginSwagLabs.element.errorMessages().should('contain', emptyPasswordFieldMessage)
        cy.url().should('not.contain', endpointInventory)

        //username problem_user
        loginSwagLabs.typeLogin(problemUser, '')
        loginSwagLabs.element.errorMessages().should('contain', emptyPasswordFieldMessage)
        cy.url().should('not.contain', endpointInventory)

        //username new-user_*56--CH
        loginSwagLabs.typeLogin(nonExistentUser, '')
        loginSwagLabs.element.errorMessages().should('contain', emptyPasswordFieldMessage)
        cy.url().should('not.contain', endpointInventory)
    })
    it('19163 | TC6: Validate try login with empty both fields.', () => {
        const emptyUserFieldMessage = this.fxt.emptyUserFieldMessage
        const endpointInventory = this.fxt.endpointInventory

        loginSwagLabs.typeLogin('', '')
        loginSwagLabs.element.errorMessages().should('contain', emptyUserFieldMessage)
        cy.url().should('not.contain', endpointInventory)
    })
    it('19163 | TC7: Validate try visit endpoint /inventory.html without login.', () => {
        const endpointInventory = this.fxt.endpointInventory
        const startMessage = this.fxt.startMessage
        const endMessage = this.fxt.endMessage
        
        loginSwagLabs.notAuthorizedEndpoint(endpointInventory)
        loginSwagLabs.element.errorMessages().should('contain', startMessage + endpointInventory + endMessage)
        cy.url().should('contain', baseUrl)
    })
    it('19163 | TC8: Validate try visit endpoint /cart.html without login.', () => {
        const endpointCart = this.fxt.endpointCart
        const startMessage = this.fxt.startMessage
        const endMessage = this.fxt.endMessage

        loginSwagLabs.notAuthorizedEndpoint(endpointCart)
        loginSwagLabs.element.errorMessages().should('contain', startMessage + endpointCart + endMessage)
        cy.url().should('contain', baseUrl)
    })
    it('19163 | TC9: Validate try visit endpoint /checkout-step-one.html without login.', () => {
        const endpointStepOne = this.fxt.endpointStepOne
        const startMessage = this.fxt.startMessage
        const endMessage = this.fxt.endMessage

        loginSwagLabs.notAuthorizedEndpoint(endpointStepOne)
        loginSwagLabs.element.errorMessages().should('contain', startMessage + endpointStepOne + endMessage)
        cy.url().should('contain', baseUrl)
    })
    it('19163 | TC10: Validate try visit endpoint /checkout-step-two.html without login.', () => {
        const endpointStepTwo = this.fxt.endpointStepTwo
        const startMessage = this.fxt.startMessage
        const endMessage = this.fxt.endMessage

        loginSwagLabs.notAuthorizedEndpoint(endpointStepTwo)
        loginSwagLabs.element.errorMessages().should('contain', startMessage + endpointStepTwo + endMessage)
        cy.url().should('contain', baseUrl)
    })
    it('19163 | TC11: Validate try visit endpoint /checkout-complete.html without login.', () => {
        const endpointComplete = this.fxt.endpointComplete
        const startMessage = this.fxt.startMessage
        const endMessage = this.fxt.endMessage

        loginSwagLabs.notAuthorizedEndpoint(endpointComplete)
        loginSwagLabs.element.errorMessages().should('contain', startMessage + endpointComplete + endMessage)
        cy.url().should('contain', baseUrl)
    })
})