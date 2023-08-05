class Login {
	get = {
		usernameInput: () => cy.get('#user-name'),
		passwordInput: () => cy.get('#password'),
		submitButton: () => cy.get('#login-button'),
		usernameInputEmpty: () => cy.get('#user-name'),
		passwordInputEmpty: () => cy.get('#password'),
		dataError: () => cy.get('[data-test="error"]'),
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