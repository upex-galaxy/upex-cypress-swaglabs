class Session {
	get = {
		usernameInput: () => cy.get('#user-name'),
		passwordInput: () => cy.get('#password'),
		LoginBtn: () => cy.get('#login-button'),
	};

	EnterData(username, password) {
		username && this.get.usernameInput().type(username);
		password && this.get.passwordInput().type(password);
	}

	Submit() {
		this.get.LoginBtn().click();
	}
}

export const Login = new Session();
