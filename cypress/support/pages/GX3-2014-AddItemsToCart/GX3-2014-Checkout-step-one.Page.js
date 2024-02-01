class CheckoutStepOne {
	get = {
		inputName: () => cy.get('[data-test= "firstName"]'),
		inputLastName: () => cy.get('[data-test= "lastName"]'),
		inputZip: () => cy.get('[data-test= "postalCode"]'),
		continueBtn: () => cy.get('[data-test= "continue"]'),
		cancelBtn: () => cy.get('[data-test= "cancel"]'),
	};
	fillInForm(name, lastName, zip) {
		name && this.get.inputName().type(name);
		lastName && this.get.inputLastName().type(lastName);
		zip && this.get.inputZip().type(zip);
	}
	submitForm() {
		this.get.continueBtn().click();
	}
}
export const checkoutStepOnePage = new CheckoutStepOne();
