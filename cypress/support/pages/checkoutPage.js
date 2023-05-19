class CheckoutPage {
	constructor() {
		this.checkoutBtn = '[data-test="checkout"]';
		this.firstNameCheckoutForm = '[data-test="firstName"]';
		this.lastNameCheckoutForm = '[data-test="lastName"]';
		this.postCodeCheckoutForm = '[data-test="postalCode"]';
		this.continueBtn = '[data-test="continue"]';
        this.finishBtn = '[data-test="finish"]';
        this.checkoutTitle = '.title';
        this.checkoutContainer = '#checkout_complete_container';
        this.cancelBtn = '[data-test="cancel"]';
	}

	clickCheckoutBtn() {
		cy.get(this.checkoutBtn).click();
	}

	fillFirstNameCheckoutForm(texto) {
		cy.get(this.firstNameCheckoutForm).type(texto);
	}
	fillLastNameCheckoutForm(texto) {
		cy.get(this.lastNameCheckoutForm).type(texto);
	}
	fillPostCodeCheckoutForm(texto) {
		cy.get(this.postCodeCheckoutForm).type(texto);
	}
	clickContinueBtn() {
		cy.get(this.continueBtn).click();
	}
	clickFinishBtn() {
		cy.get(this.finishBtn).click();
    }
    getCheckoutTitle() {
        return cy.get(this.checkoutTitle);
    }
    getCheckoutContainer() {
        return cy.get(this.checkoutContainer);
    }
    ClickCancelBtn() {
        cy.get(this.cancelBtn).click();
    }
}

export const checkoutPage = new CheckoutPage();
