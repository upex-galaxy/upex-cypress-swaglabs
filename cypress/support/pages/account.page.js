class account {
	get = {
		getUsernameInput: () => cy.get('[data-test="username"]'),
		getPasswordInput: () => cy.get('[data-test="password"]'),
		dataTex: () => cy.get('[data-test="error"]'),
		getSubmitButton: () => cy.get('#login-button'),
	};
	getUserName() {
		return cy.get('[data-test="username"]');
	}
	getPassword() {
		return cy.get('[data-test="password"]');
	}
	clickSubmitButton() {
		this.get.getSubmitButton().click();
	}
}
export const Account = new account();
