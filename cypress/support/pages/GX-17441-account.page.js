class account {
	get = {
		getUsernameInput: () => cy.get('[data-test="username"]'),
		getPasswordInput: () => cy.get('[data-test="password"]'),
		dataTex: () => cy.get('[data-test="error"]'),
		getSubmitButton: () => cy.get('#login-button'),
	};
	getLogin(name, password) {
		name && this.get.getUsernameInput().type(name);
		password && this.get.getPasswordInput().type(password);
	}
	clickSubmit() {
		this.get.getSubmitButton().click();
	}
}
export const Account = new account();
