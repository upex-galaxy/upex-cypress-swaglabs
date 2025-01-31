import {loginPage} from '../../../support/pages/GX3-6047-iniciarSesion.page.js';
describe ('GX3-6047 SwagLabs | Account | Iniciar sesión y BR de Accesos', () =>{
	beforeEach ('PRC Visitar la pagina de SwagLabs', () => {
		cy.visit('https://www.saucedemo.com');
		cy.url().should('contain', 'saucedemo');
		cy.get('.login_logo').should('exist');
	});

	it('Validar inicio de sesion satisfactoriamente', () =>{
		cy.fixture('data/GX3-6047-login').then(data =>{
			loginPage.typeUserName(data.userName.userNameValido);
			loginPage.elements.userName().should('have.value', data.userName.userNameValido);
			loginPage.typePassword(data.password.passwordValido);
			loginPage.elements.password().should('have.value', data.password.passwordValido);
			loginPage.clicksubmit();
			cy.url().should('contain', data.inventoryURL);
			loginPage.elements.tittlePage1().should('have.text', 'Products');


		});
	});
});