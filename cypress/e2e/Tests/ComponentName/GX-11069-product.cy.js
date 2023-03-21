describe('US GX-11069', () => {
	beforeEach('', () => {
		cy.visit('https://www.saucedemo.com');
		cy.get('#user-name').type('standard_user');
		cy.get('#password').type('secret_sauce');
		cy.get('#login-button').click();
	});
	it('TC1: Validar visualizar detalles del producto desde el PDP', () => {
		cy.get('[class="inventory_item_name"]').eq(0).click();
		cy.get('[class="inventory_details_img"]').should('be.visible'); //validate image
		cy.get('[class="inventory_details_name large_size"]').should('be.visible'); //Validate title
		cy.get('[class="inventory_details_desc large_size"]').should('be.visible'); //validate desc
		cy.get('[class="inventory_details_price"]').should('be.visible'); //Validate price
		cy.get('#back-to-products').should('be.visible'); //Validate buttom back to product
		cy.get('#add-to-cart-sauce-labs-backpack').should('be.visible'); //validate buttom add to cart
	});
	it('TC2: Validar visualizar detalles del producto desde el SCP', () => {
		const num = Math.round(Math.random() * 4); //traer valor random
		cy.get('[class="btn btn_primary btn_small btn_inventory"]').eq(num).click();
		cy.get('[class="shopping_cart_link"]').click();
		cy.get('[class="shopping_cart_badge"]').should('contain', '1');
		cy.get('[class="inventory_item_name"]').should('be.visible'); //validate title
		cy.get('[class="inventory_item_desc"]').should('be.visible'); //validate desc
		cy.get('[class="inventory_item_price"]').should('be.visible'); //validate price
		cy.get('[class="btn btn_secondary btn_small cart_button"]').should('be.visible'); //validate buttom remove
		cy.get('[class="cart_quantity"]').should('contain', '1'); //validate unit
	});
});
