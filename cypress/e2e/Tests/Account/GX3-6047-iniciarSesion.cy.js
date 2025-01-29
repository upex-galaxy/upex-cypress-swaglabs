describe ('GX3-6047 SwagLabs | Account | Iniciar sesión y BR de Accesos', () =>{
	beforeEach ('PRC Visitar la pagina de SwagLabs', () => {
		cy.visit('https://www.saucedemo.com');
		cy.url().should('contain', 'saucedemo');
		cy.get('.login_logo').should('exist');
	});

	it('Validar que usuario inicie sesión correctamente', () =>{
		cy.get('#user-name').type('standard_user').should('have.value', 'standard_user');
		cy.get('#password').type('secret_sauce').should('have.value', 'secret_sauce');
		cy.get('#login-button').click().should('have.id', 'root');
	});
});