import data from '@data/GX-40629- IniciarSesionyBRdeAcceso.json';
class Login {
	get = {
		endpoint: () => cy.visit('https://www.saucedemo.com/'),
		username: () => cy.get('#user-name'),
		password: () => cy.get('#password'),
		loginButton: () => cy.get('#login-button'),
		elementInSwaglabs: () => cy.get('div.app_logo'),
		rules: () => cy.get('h3[data-test="error"]'),
	};

	typeUsernameValid1() {
		this.get.username().type(data.username.validUser1);
	}
	typeUsernameValid2() {
		this.get.username().type(data.username.validUser2);
	}
	typeUsernameValid3() {
		this.get.username().type(data.username.validUser3);
	}
	typeUsernameBlock() {
		this.get.username().type(data.username.userBlock);
	}
	typeUsernameInvalid() {
		this.get.username().type(data.username.userInvalid);
	}
	typePasswordValid() {
		this.get.password().type(data.password.validPass);
	}
	typePasswordInvalid() {
		this.get.password().type(data.password.invalidPass);
	}

	clickUsername() {
		this.get.username().click();
	}
	clickPassword() {
		this.get.password().click();
	}
	clickLoginButton() {
		this.get.loginButton().click();
	}

	getElementLoginValid() {
		this.get.elementInSwaglabs().should('have.text', 'Swag Labs');
	}
	getBr3_5() {
		this.get.rules().should('have.text', 'Epic sadface: Username is required');
	}

	getBr4() {
		this.get.rules().should('have.text', 'Epic sadface: Password is required');
	}
	getBr2() {
		this.get.rules().should('have.text', 'Epic sadface: Username and password do not match any user in this service');
	}
	getBr1() {
		this.get.rules().should('have.text', 'Epic sadface: Sorry, this user has been locked out.');
	}
}

export const login = new Login();
