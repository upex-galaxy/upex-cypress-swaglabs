class Login {
	get = {
		username: () => cy.get('[data-test="username"]'),
		password: () => cy.get('[data-test= "password"]'),
		buttonLogin: () => cy.get('[data-test="login-button"]'),
		text_error: () => cy.get('[data-test="error"]'),
		button: () => cy.get('.error-button svg.svg-inline--fa'),
		item: () => cy.get('#item_4_img_link'),
	};

	setUser(username) {
		this.get.username().type(username);
	}
	nullUser(username) {
		this.get.username().click(username);
	}
	setPass(password) {
		this.get.password().type(password);
	}
	nullPass(password) {
		this.get.password().click(password);
	}
	submitLogin() {
		this.get.buttonLogin().click();
	}
	errMsg() {
		this.get.text_error().click();
	}
	setItem() {
		this.get.item().click();
	}
	setButton() {
		this.get.button().click();
	}
}

export const loginAccount = new Login();
