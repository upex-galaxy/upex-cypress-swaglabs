describe('GX-11192', () => {
	beforeEach('Precondition', () => {
		cy.visit('https://www.saucedemo.com');
		cy.get('#user-name').type('standard_user');
		cy.get('#password').type('secret_sauce');
		cy.get('#login-button').click();
		cy.get('#add-to-cart-sauce-labs-backpack').click(); //add item to cart
		cy.get('[class="shopping_cart_link"]').click(); //go to cart
		cy.get('#checkout').click(); //go to checkout
	});
	it('TC1: Validar que el Usuario 1 puede realizar checkout con datos validos', () => {
		cy.get('#first-name').type('Leonardo');
		cy.get('#last-name').type('Millan');
		cy.get('#postal-code').type('6050');
		cy.get('#continue').click();
		cy.get('#finish').should('contain', 'Finish');
	});
	it('TC2: Validar que el Usuario 1 NO puede realizar checkout con campo name vacio', () => {
		cy.get('#last-name').type('Millan');
		cy.get('#postal-code').type('6050');
		cy.get('#continue').click();
		cy.get('[class="error-message-container error"]').should('contain', 'Error: First Name is required');
	});
	it('TC3: Validar que el Usuario 1 NO puede realizar checkout con campo last name vacio', () => {
		cy.get('#first-name').type('Leonardo');
		cy.get('#postal-code').type('6050');
		cy.get('#continue').click();
		cy.get('[class="error-message-container error"]').should('contain', 'Error: Last Name is required');
	});
	it('TC4: Validar que el Usuario 1 NO puede realizar checkout con campo postal code vacio', () => {
		cy.get('#first-name').type('Leonardo');
		cy.get('#last-name').type('Millan');
		cy.get('#continue').click();
		cy.get('[class="error-message-container error"]').should('contain', 'Error: Postal Code is required');
	});
});
