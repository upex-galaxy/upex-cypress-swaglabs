class Login {
	get = {
		username: () => cy.get('[data-test="username"]'),
		password: () => cy.get('[data-test= "password"]'),
		buttonLogin: () => cy.get('[data-test="login-button"]'),
	};
}

export const loginAccount = new Login();
