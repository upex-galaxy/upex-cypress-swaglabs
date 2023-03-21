describe('GX-11192', () => {
	beforeEach('Precondicion', () => {
		cy.visit('https://www.saucedemo.com');
		cy.get('#user-name').type('standard_user');
		cy.get('#password').type('secret_sauce');
		cy.get('#login-button').click();
	});
	it('TC1', () => {
		cy.get('html');
	});
});
