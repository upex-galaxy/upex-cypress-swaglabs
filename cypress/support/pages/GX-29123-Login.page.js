class Login {
	get = {
		inputUsername: () => '[data-test="username"]',
		inputPassword: () => '[data-test="username"]',
		loginButton: () => '[data-test="username"]',
		errorMessage: () => '[data-test="error"]',
	};
	//Methods
	loginWithoutUsername(password) {
		this.get.inputPassword().type(password);
		this.get.loginButton().click();
	}
	loginWithoutPassword(username) {
		this.get.inputUsername().type(username);
		this.get.loginButton().click();
	}
	loginCorrectly(username, password) {
		this.get.inputUsername().type(username);
		this.get.inputPassword().type(password);
		this.get.loginButton().click();
	}
}
export const login = new Login();
