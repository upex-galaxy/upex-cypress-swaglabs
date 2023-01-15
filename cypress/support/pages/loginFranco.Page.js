
//  LOGIN SWAGLABS

class login{

    get = {
        inputUsername:()=> cy.get("[type='text']"),
        //inputUserNull:()=> cy.get("[type='text']").clear().should('have.value', ''),
        inputPassword:()=> cy.get("[type='password']"),
        //inputPassNull:()=> cy.get("[type='password']").clear().should('have.value', ''),
        loginButton:()=> cy.get('#login-button').contains("Login"),
        error:()=>cy.get("[data-test='error']"),
        
        
    }
    enterUsername(text){
        this.get.inputUsername().type(text)

    }
    enterPassword(text){
        this.get.inputPassword().type(text)
        
    }
    submitButton(){
        this.get.loginButton().click()
        
    }
    lockedUser(){
        this.get.error().contains('Epic sadface: Sorry, this user has been locked out.').should('be.visible')
    
    }
    PassOrUserInvalid(){
        this.get.error().contains('Epic sadface: Username and password do not match any user in this service').should('be.visible')
    }

    PassNull(){
        this.get.error().contains('Epic sadface: Password is required').should('be.visible')
        }


    UserNull(){
        this.get.error().contains('Epic sadface: Username is required').should('be.visible')
            }

// enterUserNull(text){
//         this.get.inputUserNull().type(text)
//     }
// enterPassNull(text){
//         this.get.inputPassNull().type(text)
//     }
    urlEP(){
        
    const url = Cypress.env('https://www.saucedemo.com/inventory.html').inventory
    cy.visit(url)
    }

}
export const Login = new login
