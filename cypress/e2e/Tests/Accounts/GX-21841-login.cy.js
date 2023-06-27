import { loginpage } from '@pages/loginJulian.Page';

context('✅SwagLabs | Account | Iniciar sesión y BR de Accesos', () => {
	beforeEach('El usuario debe estar situado en la página de Login', () => {
		cy.visit('https://www.saucedemo.com/');
		cy.url().should('eq', 'https://www.saucedemo.com/');
	});

	describe('#1 usuario inicia sesión correctamente', () => {
		it('El usuario rellena el formulario ingresando {string} y {string} correcto', (username, password) => {
			loginpage.enterUsername(username);
			loginpage.enterPassword(password);
		});
		it('Hace click en el botón "LOGIN"', () => {
			loginpage.clickLoginBtn();
			cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');
		});
		it('El usuario debe ser redirigido al PLP como usuario loggeado', () => {
			cy.get('#header_container').should('contain.text', 'Swag Labs');
		});
		it('Debe poder ver todos los items disponibles de la tienda.', () => {
			cy.get('#inventory_container').should('be.visible');
		});
	});
});
