export class HomePage{

    constructor() {
        this.inputUser = 'input[id="user-name"]';
        this.inputPass = '//input[@id="password"]';
        this.loginButton = '[id="login-button"]';
    }

    InputUser(name) {
        cy.get(this.inputUser).type(name);
    }
    InputPass(pass) {
        cy.xpath(this.inputPass).type(pass);
    }
    LoginButton() {
        cy.get(this.loginButton).click();
    }
    
}