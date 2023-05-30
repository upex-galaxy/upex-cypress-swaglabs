class Session {
	get = {
		usernameInput: () => cy.get('#user-name'),
		passwordInput: () => cy.get('#password'),
		LoginBtn: () => cy.get('#login-button'),
		// endpointURL: () => cy.visit('https://www.saucedemo.com/inventory.html/'),
		btnError: () => cy.get('.error-message-container.error'),
	};

	HappyPath() {
		cy.fixture('data/LoginAndBRs').then(the => {
			this.get.usernameInput().type(the.dataValid.UsernameOK);
			this.get.passwordInput().type(the.dataValid.PasswordOK);
			this.get.LoginBtn().click();
		});
	}
	emptyFields() {
		this.get.LoginBtn().click();
	}

	UserNumberOnly() {
		cy.fixture('data/LoginAndBRs').then(the => {
			this.get.usernameInput().type(the.DataInvalid.username.User_Num);
			this.get.passwordInput().type(the.dataValid.PasswordOK);
			this.get.LoginBtn().click();
		});
	}
	UserEspCharacterOnly() {
		cy.fixture('data/LoginAndBRs').then(the => {
			this.get.usernameInput().type(the.DataInvalid.username.User_Esp);
			this.get.passwordInput().type(the.dataValid.PasswordOK);
			this.get.LoginBtn().click();
		});
	}
	invalidUserOnly() {
		cy.fixture('data/LoginAndBRs').then(the => {
			this.get.usernameInput().type(the.DataInvalid.username.WrongUser);
			this.get.passwordInput().type(the.dataValid.PasswordOK);
			this.get.LoginBtn().click();
		});
	}
	invalidPswdOnly() {
		cy.fixture('data/LoginAndBRs').then(the => {
			this.get.usernameInput().type(the.dataValid.UsernameOK);
			this.get.passwordInput().type(the.DataInvalid.password.WrongPassword);
			this.get.LoginBtn().click();
		});
	}
	emptyUserOnly() {
		cy.fixture('data/LoginAndBRs').then(the => {
			this.get.passwordInput().type(the.dataValid.PasswordOK);
			this.get.LoginBtn().click();
			//Username is required
		});
	}
	emptyPswdOnly() {
		cy.fixture('data/LoginAndBRs').then(the => {
			this.get.usernameInput().type(the.dataValid.UsernameOK);
			this.get.LoginBtn().click();
			//Password is required
		});
	}
	LockedUser() {
		cy.fixture('data/LoginAndBRs').then(the => {
			this.get.usernameInput().type(the.LockedUSer);
			this.get.passwordInput().type(the.dataValid.PasswordOK);
			this.get.LoginBtn().click();
			//Password is required
		});
	}
	Endpoint() {
		cy.visit('https://www.saucedemo.com/inventory.html', {
			failOnStatusCode: false,
		});
	}
}

export const LoginBR = new Session();
