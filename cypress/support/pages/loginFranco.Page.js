//  LOGIN SWAGLABS

class login {
	get = {
		inputUsername: () => cy.get("[type='text']"),
		inputPassword: () => cy.get("[type='password']"),
		loginButton: () => cy.get('#login-button').contains('Login'),
		error: () => cy.get("[data-test='error']"),
	}
	enterUsername(text) {
		this.get.inputUsername().type(text)
	}
	enterPassword(text) {
		this.get.inputPassword().type(text)
	}
	submitButton() {
		this.get.loginButton().click()
	}
}
export const Login = new login()
