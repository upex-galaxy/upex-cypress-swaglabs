class login {
	get = {
		UserInput: () => cy.get('[id="user-name"]'),
		PassInput: () => cy.get('[id="password"]'),
		LoginButton: () => cy.get('[id="login-button"]'),
		ErrorMessage: () => cy.get('[class="error-message-container error"]'),
	};

	TypeUser(User) {
		this.get.UserInput().type(User);
	}

	TypePass(Password) {
		this.get.PassInput().type(Password);
	}

	ClickButtonLogin() {
		this.get.LoginButton().click();
	}
}

export const Login = new login();
