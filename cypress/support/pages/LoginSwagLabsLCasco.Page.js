

class Login {
    get= {
        usernameInput: ()=>  cy.get('#user-name'),
        passwordInput: ()=> cy.get('#password'),
        //buttonSubmit: ()=> cy.get('#login-button'),
        error: () => cy.get("[data-test='error']")
    }


    typeUsername(text){
        this.get.usernameInput().type(text)
    }

    typePassword(text){
        this.get.passwordInput().type(text)
    }

    clickSubmit(){
        cy.get('#login-button').click()
    }

    ProductTitle(){
        cy.get('.title').should('contain.text','Products')
    }

}
export const login = new Login