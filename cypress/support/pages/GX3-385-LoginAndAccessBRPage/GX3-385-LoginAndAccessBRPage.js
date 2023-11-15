class LoginSwagLab { 
    get = {
        userNameInput: () => cy.get('[data-test="username"]'),
        passwordInput: () => cy.get('data-test="password"'),
        loginButon: () => cy.get('[data-test="login-button"]'),
        notMatchMessage: () => cy.get('[data-test="error"]'),
    };

    Login(username, password) { 
        username && this.get.userNameInput().type(username);
        password && this.get.passwordInput().type(password);
        this.get.loginButon().click();
    }     
}
export const login = new LoginSwagLab();