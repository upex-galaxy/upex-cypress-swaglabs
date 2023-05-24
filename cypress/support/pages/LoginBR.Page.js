class Session {
	get = {
		usernameInput: () => cy.get('#user-name'),
		passwordInput: () => cy.get('#password'),
		LoginBtn: () => cy.get('#login-button'),
		ErrorNotMatch: () => cy.get('.error-message-container.error'),
		endpointURL: () => cy.visit('https://www.saucedemo.com/inventory.html'),
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
		expect(this.get.ErrorNotMatch).exist;
	}

	UserNumberOnly() {
		cy.fixture('data/LoginAndBRs').then(the => {
			this.get.usernameInput().type(the.DataInvalid.username.User_Num);
			this.get.passwordInput().type(the.dataValid.PasswordOK);
			this.get.LoginBtn().click();
			expect(this.get.ErrorNotMatch).exist;
		});
	}
	UserEspCharacterOnly() {
		cy.fixture('data/LoginAndBRs').then(the => {
			this.get.usernameInput().type(the.DataInvalid.username.User_Esp);
			this.get.passwordInput().type(the.dataValid.PasswordOK);
			this.get.LoginBtn().click();
			expect(this.get.ErrorNotMatch).exist;
		});
	}
	invalidUserOnly() {
		cy.fixture('data/LoginAndBRs').then(the => {
			this.get.usernameInput().type(the.DataInvalid.username.WrongUser);
			this.get.passwordInput().type(the.dataValid.PasswordOK);
			this.get.LoginBtn().click();
			expect(this.get.ErrorNotMatch).exist;
		});
	}
	invalidPswdOnly() {
		cy.fixture('data/LoginAndBRs').then(the => {
			this.get.usernameInput().type(the.dataValid.UsernameOK);
			this.get.passwordInput().type(the.DataInvalid.password.WrongPassword);
			this.get.LoginBtn().click();
			expect(this.get.ErrorNotMatch).exist;
		});
	}
	emptyUserOnly() {
		cy.fixture('data/LoginAndBRs').then(the => {
			// this.get.usernameInput().type(the.dataValid.UsernameOK);
			this.get.passwordInput().type(the.dataValid.PasswordOK);
			this.get.LoginBtn().click();
			expect(this.get.ErrorNotMatch).exist;
			//Username is required
		});
	}
	emptyPswdOnly() {
		cy.fixture('data/LoginAndBRs').then(the => {
			this.get.usernameInput().type(the.dataValid.UsernameOK);
			// this.get.passwordInput().type(the.dataValid.PasswordOK);
			this.get.LoginBtn().click();
			expect(this.get.ErrorNotMatch).exist;
			//Password is required
		});
	}
	LockedUser() {
		cy.fixture('data/LoginAndBRs').then(the => {
			this.get.usernameInput().type(the.LockedUSer);
			this.get.passwordInput().type(the.dataValid.PasswordOK);
			this.get.LoginBtn().click();
			expect(this.get.ErrorNotMatch).exist;
			//Password is required
		});
	}
	Endpoint() {
		this.get.endpointURL();
		expect(this.get.ErrorNotMatch).exist;
	}
}

export const LoginBR = new Session();
