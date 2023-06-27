import { loginpage } from '@pages/loginJulian.Page';
import the from '../../../fixtures/data/loginJulian.json';

describe('✅SwagLabs | Account | Iniciar sesión y BR de Accesos', () => {
	beforeEach('El usuario debe estar situado en la página de Login', () => {
		cy.visit('https://www.saucedemo.com/');
		cy.url().should('eq', 'https://www.saucedemo.com/');
	});
	it('GX-21842 | TC1: Validar que el usuario pueda iniciar sesión correctamente', () => {
		loginpage.enterUsername(the.data.valid.correctUser);
		loginpage.enterPassword(the.data.valid.password);
		loginpage.clickLoginBtn();
		cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');
		cy.get('#header_container').should('contain.text', 'Swag Labs');
		cy.get('#inventory_container').should('be.visible');
	});
	it('GX-21842 | TC2: Validar intentar iniciar sesión con cuenta bloqueada', () => {
		loginpage.enterUsername(the.data.invalid.lockedUser);
		loginpage.enterPassword(the.data.valid.password);
		loginpage.clickLoginBtn();
		cy.contains(the.errorMsg.errorMsg1).should('be.visible');
	});
	it('GX-21842 | TC3: Validar intentar iniciar sesión con cuenta incorrecta o inexistente.', () => {
		loginpage.enterUsername(the.data.invalid.incorrectUser);
		loginpage.enterPassword(the.data.valid.password);
		loginpage.clickLoginBtn();
		cy.contains(the.errorMsg.errorMsg2).should('be.visible');
	});
	it('GX-21842 | TC4: Validar intentar iniciar sesión dejando el campo “Username” vacío en el formulario', () => {
		loginpage.enterPassword(the.data.valid.password);
		loginpage.clickLoginBtn();
		cy.contains(the.errorMsg.errorMsg3).should('be.visible');
	});
	it('GX-21842 | TC5: Validar intentar iniciar sesión dejando el campo “Password” vacío en el formulario', () => {
		loginpage.enterUsername('standard_user');
		loginpage.clickLoginBtn();
		cy.contains(the.errorMsg.errorMsg4).should('be.visible');
	});
	it('GX-21842 | TC6: Validar intentar iniciar sesión dejando los campos “Password”  y “Username” vacíos en el formulario', () => {
		loginpage.clickLoginBtn();
		cy.contains(the.errorMsg.errorMsg3).should('be.visible');
	});
	it('GX-21842 | TC7: Validar intentar ingresar a un endpoint del SUT sin antes iniciar sesión', () => {
		cy.visit('/inventory.html', { failOnStatusCode: false });
		loginpage.get.errorMessage().should('contain.text', the.errorMsg.inventoryErrorMsg).and('be.visible');
	});
});
