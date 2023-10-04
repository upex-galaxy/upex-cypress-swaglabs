const data = Cypress.env('swagLabs').login.users;

class Login {
	get = {
		//Login
		username: () => cy.get('#user-name'),
		password: () => cy.get('#password'),
		submitBtn: () => cy.get('#login-button'),
		//PLP
		cardBtn: () => cy.get('[class*=btn_primary ]'),
	};

	login() {
		this.get.username().type(data.correctUser);
		this.get.password().type(data.correctPass);
		this.get.submitBtn().click();
	}
}

export const login = new Login();
