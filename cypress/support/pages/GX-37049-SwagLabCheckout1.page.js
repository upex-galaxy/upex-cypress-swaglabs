class swgCheckout {
	get = {
		inputUsername: () => cy.get('[data-test="firstName"]'),
		inputPassword: () => cy.get('[data-test="lastName"]'),
		inputPostalCode: () => cy.get('[data-test="postalCode"]'),
		ButtonContinue: () => cy.get('[data-test="continue"]'),
	};

	fillCheckoutInfo({ Fname: Fname, pass: pass, postalCode: postalCode }) {
		Fname && this.get.inputUsername().type(Fname);
		pass && this.get.inputPassword().type(pass);
		pass && this.get.inputPostalCode().type(postalCode);
	}

	clickButtonContinueToChk2() {
		this.get.ButtonContinue().click();
	}
}

export const swgCheckout1Page = new swgCheckout();
