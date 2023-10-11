class SwaglabCheckout2 {
	get = {
		cartItem: () => cy.get('[class="cart_item"]'),
		buttonCancel: () => cy.get('[data-test="cancel"]'),
		buttonFinish: () => cy.get('[data-test="finish"]'),
	};

	clickButtonCancel() {
		this.get.buttonCancel().click();
	}

	clickButtonFinish() {
		this.get.buttonFinish().click();
	}
}

export const swglabCheckout2Page = new SwaglabCheckout2();
