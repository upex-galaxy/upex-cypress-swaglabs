import { loginSwagLabs } from "@pages/pom-GX-19162";

describe('SwagLabs | Account | Login and access to BR', function() {
    
    before(() => {
        cy.fixture('data/data-GX-19162').then(fxt => { this.fxt = fxt })
    })

    it('19163 | TC1: Validate login successfully', () => {
        //username Standard_user
        loginSwagLabs.typeLogin(this.fxt.userStandard, this.fxt.password)
        loginSwagLabs.element.cards().should('be.visible')
        cy.url().should('contain', this.fxt.endpointInventory)
        //username performance_glitch_user
        loginSwagLabs.typeLogin(this.fxt.userPerformance, this.fxt.password)
        loginSwagLabs.element.cards().should('be.visible')
        cy.url().should('contain', this.fxt.endpointInventory)
        //username problem_user
        loginSwagLabs.typeLogin(this.fxt.userProblem, this.fxt.password)
        loginSwagLabs.element.cards().should('be.visible')
        cy.url().should('contain', this.fxt.endpointInventory)
    })
    it('19163 | TC2: Validate try login with bloked account.', () => {
        //username locked_out_user
        loginSwagLabs.typeLogin(this.fxt.userLocked, this.fxt.password)
        loginSwagLabs.element.errorMessages().should('contain', this.fxt.lokcedUserMessage)
        cy.url().should('contain', '/')
    })
    it('19163 | TC3: Validate try login with incorrect or non existent account.', () => {
        //username new-user_*56--CH
        loginSwagLabs.typeLogin(this.fxt.userNonExistent, this.fxt.password)
        loginSwagLabs.element.errorMessages().should('contain', this.fxt.nonExistentUserMessage)
        cy.url().should('contain', '/')
        //username admin
        loginSwagLabs.typeLogin(this.fxt.userAdmin, this.fxt.password)
        loginSwagLabs.element.errorMessages().should('contain', this.fxt.nonExistentUserMessage)
        cy.url().should('contain', '/')
        //username admin123
        loginSwagLabs.typeLogin(this.fxt.userAdmin123, this.fxt.password)
        loginSwagLabs.element.errorMessages().should('contain', this.fxt.nonExistentUserMessage)
        cy.url().should('contain', '/')
        //username admin password admin123
        loginSwagLabs.typeLogin(this.fxt.userAdmin, this.fxt.passwordAdmin)
        loginSwagLabs.element.errorMessages().should('contain', this.fxt.nonExistentUserMessage)
        cy.url().should('contain', '/')
        //username admin123 password admin123
        loginSwagLabs.typeLogin(this.fxt.userAdmin123, this.fxt.passwordAdmin)
        loginSwagLabs.element.errorMessages().should('contain', this.fxt.nonExistentUserMessage)
        cy.url().should('contain', '/')
        //username fffffffffffffffffffffffffkkkkkkkkkkkkkkkkkkkkkkkkkkkkkhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhaaaaaaaaaaaaaaaaaaaaaa111111
        loginSwagLabs.typeLogin(this.fxt.userLong, this.fxt.password)
        loginSwagLabs.element.errorMessages().should('contain', this.fxt.nonExistentUserMessage)
        cy.url().should('contain', '/')
    })
    it('19163 | TC4: Validate try login with empty username field.', () => {
        loginSwagLabs.typeLogin('', this.fxt.password)
        loginSwagLabs.element.errorMessages().should('contain', this.fxt.emptyUserFieldMessage)
        cy.url().should('contain', '/')
    })
    it('19163 | TC5: Validate try login with empty password field.', () => {
        //username standard_user
        loginSwagLabs.typeLogin(this.fxt.userStandard, '')
        loginSwagLabs.element.errorMessages().should('contain', this.fxt.emptyPasswordFieldMessage)
        cy.url().should('contain', '/')
        //username performance_glitch_user
        loginSwagLabs.typeLogin(this.fxt.userPerformance, '')
        loginSwagLabs.element.errorMessages().should('contain', this.fxt.emptyPasswordFieldMessage)
        cy.url().should('contain', '/')
        //username problem_user
        loginSwagLabs.typeLogin(this.fxt.userProblem, '')
        loginSwagLabs.element.errorMessages().should('contain', this.fxt.emptyPasswordFieldMessage)
        cy.url().should('contain', '/')
        //username new-user_*56--CH
        loginSwagLabs.typeLogin(this.fxt.userNonExistent, '')
        loginSwagLabs.element.errorMessages().should('contain', this.fxt.emptyPasswordFieldMessage)
        cy.url().should('contain', '/')
    })
    it('19163 | TC6: Validate try login with empty both fields.', () => {
        loginSwagLabs.typeLogin('', '')
        loginSwagLabs.element.errorMessages().should('contain', this.fxt.emptyUserFieldMessage)
        cy.url().should('contain', '/')
    })
    it('19163 | TC7: Validate try visit endpoint /inventory.html without login.', () => {
        loginSwagLabs.notAuthorizedEndpoint(this.fxt.endpointInventory)
        loginSwagLabs.element.errorMessages().should('contain', this.fxt.startMessage + this.fxt.endpointInventory + this.fxt.endMessage)
        cy.url().should('contain', '/')
    })
    it('19163 | TC8: Validate try visit endpoint /cart.html without login.', () => { 
        loginSwagLabs.notAuthorizedEndpoint(this.fxt.endpointCart)
        loginSwagLabs.element.errorMessages().should('contain', this.fxt.startMessage + this.fxt.endpointCart + this.fxt.endMessage)
        cy.url().should('contain', '/')
    })
    it('19163 | TC9: Validate try visit endpoint /checkout-step-one.html without login.', () => {
        loginSwagLabs.notAuthorizedEndpoint(this.fxt.endpointStepOne)
        loginSwagLabs.element.errorMessages().should('contain', this.fxt.startMessage + this.fxt.endpointStepOne + this.fxt.endMessage)
        cy.url().should('contain', '/')
    })
    it('19163 | TC10: Validate try visit endpoint /checkout-step-two.html without login.', () => {
        loginSwagLabs.notAuthorizedEndpoint(this.fxt.endpointStepTwo)
        loginSwagLabs.element.errorMessages().should('contain', this.fxt.startMessage + this.fxt.endpointStepTwo + this.fxt.endMessage)
        cy.url().should('contain', '/')
    })
    it('19163 | TC11: Validate try visit endpoint /checkout-complete.html without login.', () => {
        loginSwagLabs.notAuthorizedEndpoint(this.fxt.endpointComplete)
        loginSwagLabs.element.errorMessages().should('contain', this.fxt.startMessage + this.fxt.endpointComplete + this.fxt.endMessage)
        cy.url().should('contain', '/')
    })

})