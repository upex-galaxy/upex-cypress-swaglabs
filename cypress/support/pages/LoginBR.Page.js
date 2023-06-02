class Session {
	get = {
		usernameInput: () => cy.get('#user-name'),
		passwordInput: () => cy.get('#password'),
		LoginBtn: () => cy.get('#login-button'),
		// btnError: () => cy.get('.error-message-container.error'),
	};

	EnterData(username, password) {
		username && this.get.usernameInput().type(username);
		password && this.get.passwordInput().type(password);
	}

	Submit() {
		this.get.LoginBtn().click();
	}

	Endpoint() {
		cy.visit('https://www.saucedemo.com/inventory.html', {
			failOnStatusCode: false,
		});
	}
}

export const Login = new Session();
