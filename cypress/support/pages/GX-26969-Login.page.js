class Login{
	get = {
		usernameInput: () => cy.get('#user-name'),
		passwordInput: () => cy.get('#password'),
		submitButton: () => cy.get('#login-button'),
		errorMessage: () => cy.get('.error-message-container.error')
	};
	
	enterUsername(user) {
		this.get.usernameInput().type(user);
	}
	enterPassword(password) {
		this.get.passwordInput().type(password);
	}
	SubmitLogin() {
		this.get.submitButton().click();
	}
	messageResult() {
		this.get.errorMessage().should('have.text','Sorry, this user has been locked out.');
	}
}

class LogOut {
	get = {
		menu:() => cy.get('#react-burger-menu-btn'),
		logOutButton: () => cy.get('#logout_sidebar_link')
	};
	ingresoAlMenu() {
		this.get.menu().click();
	}
	cierreDeSesion() {
		this.get.logOutButton().click();
	}
}
export const login = new Login();
export const logOut = new LogOut();