class Login {
	get = {
		username: () => cy.get('[data-test="username"]'),
		password: () => cy.get('[data-test="password"]'),
		loginBtn: () => cy.get('[data-test="login-button"]'),
		items: () => cy.get('.inventory_item'),
		burgerMenuBtn: () => cy.get('button[id="react-burger-menu-btn"]'),
		logout: () => cy.get('#logout_sidebar_link'),
		errorMsg: () => cy.get('.error-message-container.error'),
		closeErrorBtn: () => cy.get('.error-button'),
		invalidMsg: () => cy.get('.error-button'),
		plpTitle: () => cy.get('.header_secondary_container > span'),
	};

	fillUsername(data) {
		this.get.username().type(data);
	}
	fillPassword(data) {
		this.get.password().type(data);
	}
	clickLoginBtn() {
		this.get.loginBtn().click();
	}
	logout() {
		this.get.burgerMenuBtn().click({ force: true });
		this.get.logout().click();
	}
	closeErrorBtn() {
		this.get.closeErrorBtn().click();
	}
}
export const login = new Login();
