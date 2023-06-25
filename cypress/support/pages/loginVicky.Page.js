class login {
	elements = {
		UserNameInput: () => cy.get('[type="text"]'),
		PasswordInput: () => cy.get('[type="password"]'),
		LoginButton: () => cy.get('[name="login-button"]'),
		ErrorMessage: () => cy.get('[data-test="error"]'),
	};

	TypeUserName(username) {
		this.elements.UserNameInput().type(username);
	}
	TypePassword(password) {
		this.elements.PasswordInput().type(password);
	}
	ClickLogin() {
		this.elements.LoginButton().click();
	}
}
export const Login = new login();
