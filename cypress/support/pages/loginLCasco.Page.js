class InitSesion{

    get= {
        ingresarUserName: ()=> cy.get('#user-name'),
        ingresarPassword: ()=> cy.get('#password'),
        buttonLogin:()=> cy.get('#login-button'),
        ErrorMsj:()=> cy.get("[data-test='error']"),
        buttonMenu:()=>cy.get('#react-burger-menu-btn'),
        buttonLogOut:()=>cy.get('#logout_sidebar_link')
    }

    inputUserName(text){
        this.get.ingresarUserName().type(text)
    }
    inputPassword(text){
        this.get.ingresarPassword().type(text)
    }
    clickButtonLogin(){
        this.get.buttonLogin().click()
    }
    clickButtonMenu(){
        this.get.buttonMenu().click()
    }

    clickButtonLogOut(){
        this.get.buttonLogOut().click()
    }

}



export const initsesion = new InitSesion;