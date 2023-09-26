class SwaglabsPDP {
	get = {
		ButtonCheckout: () => cy.get('[data-test="checkout"]'),
	};

	ClickButtonCheckout() {
		this.get.ButtonCheckout().click();
	}
}

export const swagLabsPDPpage = new SwaglabsPDP();
