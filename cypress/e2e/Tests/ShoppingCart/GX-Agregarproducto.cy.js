describe('SwagLabs | SCP | Agregar producto al carrito de compras desde el PLP o PDP', () => {
	beforeEach(() => {
		cy.visit('https://www.saucedemo.com');
		cy.get("[type='text']").type('standard_user');
		cy.get("[type='password']").type('secret_sauce');
		cy.get("[name='login-button']").click();
		cy.location('pathname').should('include', 'inventory');
	});

	context('US GX-20039 | TS: ✅SwagLabs | SCP | Agregar producto al carrito de compras desde el PLP o PDP', () => {
		it('20040 | TC1: Validar añadir un producto del PLP al Shopping-Cart exitosamente.', () => {
			cy.get('[name="add-to-cart-sauce-labs-bike-light"]').click();
			cy.get('[name="remove-sauce-labs-bike-light"]').should('be.visible');
			cy.get('[class="shopping_cart_badge"]').should('be.visible').contains(1);
			cy.visit('https://www.saucedemo.com/cart.html', { failOnStatusCode: false });
			cy.get('[class="cart_list"]').should('be.visible').contains('bike');
		});
		it('20040 | TC2: Validar añadir un producto del PDP al Shopping-Cart exitosamente', () => {
			cy.visit('https://www.saucedemo.com/inventory.html', { failOnStatusCode: false });
			cy.get('[name="add-to-cart-sauce-labs-fleece-jacket"]').click();
			cy.get('[name="remove-sauce-labs-fleece-jacket"]').should('be.visible');
			cy.get('[class="shopping_cart_badge"]').should('be.visible').contains(1);
			cy.visit('https://www.saucedemo.com/cart.html', { failOnStatusCode: false });
			cy.get('[class="cart_list"]').should('be.visible').contains('jacket');
			cy.get('[class="inventory_item_price"]').should('be.visible').contains('49.99');
		});
	});
});
