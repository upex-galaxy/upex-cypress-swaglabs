class loginPage {
	//Agarrables
	get = {
		usernameInput: () => cy.get('[name="user-name"]'),
		passwordInput: () => cy.get('[name="password"]'),
		submitButton: () => cy.get('[type="submit"]'),
	};
}
enterusername(type) {
    this.get.usernameInput.type(type);
}