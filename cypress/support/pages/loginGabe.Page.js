class loginPage {
	//Agarrables
	get = {
		usernameInput: () => cy.get('[name="user-name"]'),
		passwordInput: () => cy.get('[name="password"]'),
		submitButton: () => cy.get('[type="submit"]'),
		logmesage: () => cy.get('[data-test="error"]'),
	};

	//Accionables
	enterUsername(type) {
		this.get.usernameInput().type(type);
	}

	enterPassword(type) {
		this.get.passwordInput().type(type);
	}

	clickSubmitButton() {
		this.get.submitButton().click();
	}
}

export const loginpage = new loginPage();
