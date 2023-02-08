//  LOGIN SWAGLABS

class login {
	get = {//LOGIN
		inputUsername: () => cy.get("[type='text']"),
		inputPassword: () => cy.get("[type='password']"),
		loginButton: () => cy.get('#login-button').contains('Login'),
		error: () => cy.get("[data-test='error']"),
		//CHECKOUT
		cancelButton:()=>cy.get(""),
		continueButton:()=>cy.get(""),
        lastName:()=>cy.get("#last-name"),
        firstName:()=>cy.get("#first-name"),
		checkoutButton:()=>cy.get("#checkout"),
		postalCode:()=>("#postal-code")
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
	cancelButton(){
		
	}
	continueButton(){
	
	}
}
export const Login = new login()
