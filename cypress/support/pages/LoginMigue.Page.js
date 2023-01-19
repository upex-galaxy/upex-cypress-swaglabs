class loginSl {
	get = {
		inputUsername: () => cy.get("[type='text']"),
		inputPassword: () => cy.get("[type='password']"),
		submitButton: () => cy.get("#login-button").contains('Login'),
		error : () => cy.get("[data-test = 'error']"),
	}

	//Métodos 
	enterInputUsername(text){
		this.get.inputUsername().type(text)
	}
	enterInputPassword(text){
		this.get.inputPassword().type(text)
	}
	enterSubmitButton(){
		this.get.submitButton().click()
	}
}
export const Login = new loginSl()