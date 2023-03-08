
describe('Login Logout Swag Labs',()=>{
    beforeEach('',()=>{
        cy.visit('https://www.saucedemo.com/')
        cy.url().should('contain','sauce')
    })

    it('TC1 validar login correcto standard_user',()=>{
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.url().should('contain','/inventory.html')
    })

    it('TC2 validar login correcto problem_user',()=>{
        cy.get('#user-name').type('problem_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
    })

    it('TC3 validar login correcto performance_glitch_user',()=>{
        cy.get('#user-name').type('performance_glitch_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
    })


    it ('TC4 Validar login con cuenta bloqueada',()=>{
        cy.get('#user-name').type('locked_out_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get("[data-test='error']").should('have.text','Epic sadface: Sorry, this user has been locked out.')
    })

    it('TC05 validar login account y password null',()=>{
        cy.get('#login-button').click()
        cy.get("[data-test='error']").should('have.text','Epic sadface: Username is required')
    })

    it('TC06 validar login account valido y password null',()=>{
        cy.get('#user-name').type('problem_user')
        cy.get('#login-button').click()
        cy.get("[data-test='error']").should('have.text','Epic sadface: Password is required')
    })

    it('TC07 validar login account null y password valido',()=>{
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get("[data-test='error']").should('have.text','Epic sadface: Username is required')
    })

    it('TC08 validar login con user inexistente y password valido',()=>{
        cy.get('#user-name').type('holaMundo')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get("[data-test='error']").should('have.text','Epic sadface: Username and password do not match any user in this service')
    })

    it ('TC09 validar login con user problem_user',()=>{
        cy.get('#user-name').type('problem_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
    })

    it(' TC10 Validar url /cart.html',()=>{
        cy.visit('https://www.saucedemo.com/cart.html',{failOnStatusCode: false})
        cy.get("[data-test='error']").contains("Epic sadface: You can only access '/cart.html' when you are logged in.")
    })

    
    it(' TC11 Validar url /checkout-step-one.html',()=>{
        cy.visit('https://www.saucedemo.com/checkout-step-one.html',{failOnStatusCode: false})
        cy.get("[data-test='error']").contains("Epic sadface: You can only access '/checkout-step-one.html' when you are logged in.")
    })

    it(' TC12 Validar url /checkout-step-two.html',()=>{
        cy.visit('https://www.saucedemo.com/checkout-step-two.html',{failOnStatusCode: false})
        cy.get("[data-test='error']").contains("Epic sadface: You can only access '/checkout-step-two.html' when you are logged in.")
    })

    it(' TC12 Validar URL /checkout-complete.html',()=>{
        cy.visit('https://www.saucedemo.com/checkout-complete.html',{failOnStatusCode: false})
        cy.get("[data-test='error']").contains("Epic sadface: You can only access '/checkout-complete.html' when you are logged in.")
    })

    it('TC13 Validar logout correcto',()=>{
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.url().should('contain','/inventory.html')
        cy.get('#react-burger-menu-btn').click()
        cy.get('#logout_sidebar_link').click()
    })
    

})