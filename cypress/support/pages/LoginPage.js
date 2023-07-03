class LoginPage {
	constructor() {
		this.userName = '#user-name';
		this.password = '#password';
		this.loginButton = '#login-button';
		this.shoppingCartBadge = 'span[class="shopping_cart_badge"]';
	}

	fillUsernameField(user) {
		if (user != null) {
			cy.get(this.userName).type(user);
		}
	}
	fillPasswordField(password) {
		cy.get(this.password).type(password);
	}

	ClickLoginButton() {
		cy.get(this.loginButton).click();
	}

	CheckNoProductAdded() {
		cy.get(this.shoppingCartBadge).should('not.exist');
	}
}

export const loginPage = new LoginPage();
