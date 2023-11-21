class IniciarSesión {
	get = {
		userName: () => cy.get('#user-name'),
		password: () => cy.get('#password'),
		loginButton: () => cy.get('#login-button'),
		successfulLogin: () => cy.get('.title'),
		loginError: () => cy.get('[data-test="error"]'),
	};
}

export const IniciarSesiónPage = new IniciarSesión();
