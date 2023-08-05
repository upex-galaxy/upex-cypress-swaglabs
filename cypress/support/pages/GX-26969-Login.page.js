class Login {
	get = {
		usernameInput: () => cy.get('#user-name'),
		passwordInput: () => cy.get('#password'),
		submitButton: () => cy.get('#login-button'),
		errorMessageLocked: () => cy.get('.error-message-container.error'),
		errorMessageInvalid: () => cy.get('.error-message-container.error'),
		errorMessageEmptyUserField: () => cy.get('.error-message-container.error'),
		usernameInputEmpty: () => cy.get('#user-name'),
		passwordInputEmpty: () => cy.get('#password')
	};
	
	enterUsername(user) {
		this.get.usernameInput().type(user);
	}
	enterUsernameEmpty() {
		this.get.usernameInputEmpty().clear();
	}
	enterPassword(password) {
		this.get.passwordInput().type(password);
	}
	enterPasswordEmpty() {
		this.get.passwordInputEmpty().clear();
	}
	SubmitLogin() {
		this.get.submitButton().click();
	}
	messageResultLocked() {
		this.get.errorMessageLocked().should('have.text', 'Sorry, this user has been locked out.');
	}
	messageResultInvalid() {
		this.get.errorMessageInvalid().should('have.text', 'Username and password do not match any user in this service');
	}
	messageResultEmptyUserField() {
		this.get.errorMessageEmptyUserField().should('have.text', 'Username is required');
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