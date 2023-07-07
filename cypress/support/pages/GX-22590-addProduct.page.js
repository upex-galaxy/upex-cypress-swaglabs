class add {
	get = {
		getUsernameInput: () => cy.get('[data-test="username"]'),
		getPasswordInput: () => cy.get('[data-test="password"]'),
		getSubmitButton: () => cy.get('#login-button'),
		bttnAdd: () => cy.get('.pricebar'),
	};
	getLogin(name, password) {
		name && this.get.getUsernameInput().type(name);
		password && this.get.getPasswordInput().type(password);
		this.get.getSubmitButton().click();
	}
}
export const Add = new add();
