describe('US GX-11069', () => {
	beforeEach('', () => {
		cy.visit('https://www.saucedemo.com');
		cy.get('#user-name').type('standard_user');
		cy.get('#password').type('secret_sauce');
		cy.get('#login-button').click();
	});
	it('TC1: Validar visualizar detalles del producto desde el PDP', () => {
		const num = Math.round(Math.random() * 4); //traer valor random para seleccionar item random
		cy.get('[class="inventory_item_name"]').eq(num).click();
		cy.get('[class="inventory_details_img"]').should('be.visible'); //validate image
		cy.get('[class="inventory_details_name large_size"]').should('be.visible'); //Validate title
		cy.get('[class="inventory_details_desc large_size"]').should('be.visible'); //validate desc
		cy.get('[class="inventory_details_price"]').should('be.visible'); //Validate price
		cy.get('#back-to-products').should('be.visible'); //Validate buttom back to product
		cy.get('[class="inventory_details"]').should('contain', 'Add to cart'); //validate buttom add to cart
	});
	it('TC2: Validar cambio del boton add to cart a remove', () => {
		const num = Math.round(Math.random() * 4); //traer valor random para seleccionar item random
		cy.get('[class="inventory_item_name"]').eq(num).click();
		cy.get('[class="inventory_details_img"]').should('be.visible'); //validate image
		cy.get('[class="inventory_details_name large_size"]').should('be.visible'); //Validate title
		cy.get('[class="inventory_details_desc large_size"]').should('be.visible'); //validate desc
		cy.get('[class="inventory_details_price"]').should('be.visible'); //Validate price
		cy.get('#back-to-products').should('be.visible'); //Validate buttom back to product
		cy.get('[class="btn btn_primary btn_small btn_inventory"]').click();
		cy.get('[class="inventory_details"]').should('contain', 'Remove'); //validate buttom add to cart
	});
});
