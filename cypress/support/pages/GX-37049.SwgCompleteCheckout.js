class SwgCompleteCheckout {
	get = {
		elementCompleteHeaderTxt: () => cy.get('[class="complete-header"]'),
		elementCompleteTxt: () => cy.get('[class="complete-text"]'),
	};
}

export const swgCompleteChkPage = new SwgCompleteCheckout();
