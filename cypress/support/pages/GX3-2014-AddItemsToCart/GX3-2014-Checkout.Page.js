class CheckoutPage {
	get = {
		inputName: () => cy.get('[data-test= "firstName"]'),
		inputLastName: () => cy.get('[data-test= "lastName"]'),
		inputZip: () => cy.get('[data-test= "postalCode"]'),
		continueBtn: () => cy.get('[data-test= "continue"]'),
		cancelBtn: () => cy.get('[data-test= "cancel"]'),
		finishBtn: () => cy.get('[data-test= "finish"]'),
		checkoutCompleteHeader: () => cy.get('.complete-header'),
		checkoutCompleteText: () => cy.get('.complete-text'),
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
export const checkoutPage = new CheckoutPage();
