//se coloca primero la clase
class Login {
	//sigue el constructor
	get = {
		//debajo las funciones para obtener los elementos del SUT
		usernameInput: () => cy.get('#user-name'),
		passwordInput: () => cy.get('#password'),
		submitButton: () => cy.get("[type='submit']"),
		hamburgerMenuImg: () => cy.get("[alt='Open Menu']"),
		errorCircleUsername: () => cy.get('div input + svg').eq(0),
		errorCirclePassword: () => cy.get('div input + svg').eq(1),
		errorMessage: () => cy.get('form div:nth-child(3)'),
		errorEndpoint: () => cy.get("[data-test='error']"),
	};

	//debajo los métodos para darle acción a los elementos
	typeUsername(type) {
		this.get.usernameInput().type(type);
	}
	//signfica que lo que le pase en el parámetro del método es lo que va a escribir
	typePassword(type) {
		this.get.passwordInput().type(type);
	}
	submitLogin() {
		this.get.submitButton().click();
	}
}

//se exporta la clase, mencionando que la variable login es igual a la clase.
export const login = new Login();