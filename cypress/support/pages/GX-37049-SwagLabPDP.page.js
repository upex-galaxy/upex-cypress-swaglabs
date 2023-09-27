class SwaglabsPDP {
	get = {
		ButtonCheckout: () => cy.get('[data-test="checkout"]'),
		cartItemPDP: () => cy.get('[class="cart_item"]'),
	};

	ClickButtonCheckout() {
		this.get.ButtonCheckout().click();
	}

	ValidateItemsOnPDP() {
		const items = [];

		return this.get
			.cartItemPDP()
			.each(element => {
				cy.wrap(element).then(() => {
					const nameSelector = '[class*="item_name"]';
					const priceSelector = '[class*="_item_price"]';

					cy.get(nameSelector)
						.invoke('text')
						.then(textName => {
							cy.get(priceSelector)
								.invoke('text')
								.then(textPrice => {
									items.push({ name: textName, price: textPrice });
								});
						});
				});
			})
			.then(() => {
				return items;
			});
	}
}

export const swagLabsPDPpage = new SwaglabsPDP();
