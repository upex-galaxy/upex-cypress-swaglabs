class login {
	get = {
		inputUserName: () =>  cy.get('[data-test="username"]'),
		inputPassword: () => cy.get('[data-test="password"]'),
		buttonLogin: () => cy.get ('[name="login-button"]'),
		labelError:()=> cy.get ('[data-test="error"]')
	};
	enterUserName(UserName: string){
		UserName &&this.get.inputUserName().type(UserName);
	}
	enterPassword(Password: string){
		Password &&this.get.inputPassword().type(Password);
	}
	submitLogin() {
		this.get.buttonLogin().click({ force: true });
	}
}
export const LoginPage = new login();