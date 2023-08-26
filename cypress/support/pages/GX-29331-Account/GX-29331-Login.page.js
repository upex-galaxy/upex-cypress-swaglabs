class Login {
	elements = {
		usernameInput: () => cy.get('[data-test="username"]'),
		passwordInput: () => cy.get('#password'),
		submitButton: () => cy.get('#login-button'),
		dataError: () => cy.get('[data-test="error"]'),
		swagsWord: () => cy.get('.app_logo'),
	};

	enterUsername(username) {
		this.elements.usernameInput().type(username);
	}

	enterPassword(password) {
		this.elements.passwordInput().type(password);
	}

	clickOnSubmitBtn() {
		this.elements.submitButton().click();
	}

	emptyUsername() {
		this.elements.usernameInput().invoke('val', '');
	}

	emptyPassword() {
		this.elements.passwordInput().invoke('val', '');
	}

	assertTitlePage() {
		this.elements.swagsWord().should('exist');
	}

	assertMessageBlocked() {
		this.elements.dataError().should('contain', 'Epic sadface: Sorry, this user has been locked out.');
	}

	assertAccountFailedMessage() {
		this.elements.dataError().should('contain', 'Epic sadface: Username and password do not match any user in this service');
	}

	assertEmptyUsername() {
		this.elements.dataError().should('contain', 'Epic sadface: Username is required');
	}

    assertEmptyPassword() {
		this.elements.dataError().should('contain', 'Epic sadface: Password is required');
	}

}
export const login = new Login();
