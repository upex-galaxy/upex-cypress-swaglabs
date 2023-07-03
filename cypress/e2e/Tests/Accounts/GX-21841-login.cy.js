import { loginpage } from '@pages/GX-22334-login.Page';
import the from '../../../fixtures/data/loginJulian.json';

describe('✅SwagLabs | Account | Iniciar sesión y BR de Accesos', () => {
	beforeEach('El usuario debe estar situado en la página de Login', () => {
		cy.visit('https://www.saucedemo.com/');
		cy.url().should('eq', 'https://www.saucedemo.com/');
	});
	it('GX-21842 | TC1: Validar que se pueda iniciar sesión correctamente con el usuario “standard_user“', () => {
		loginpage.enterUsername(the.data.valid.correctUser);
		loginpage.enterPassword(the.data.valid.password);
		loginpage.clickLoginBtn();
		cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');
		cy.get('#header_container').should('contain.text', 'Swag Labs');
		cy.get('#inventory_container').should('be.visible');
	});
	it('GX-21842 | TC2: Validar que se pueda iniciar sesión correctamente con el usuario “problem_user”', () => {
		loginpage.enterUsername(the.data.valid.problemUser);
		loginpage.enterPassword(the.data.valid.password);
		loginpage.clickLoginBtn();
		cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');
		cy.get('#header_container').should('contain.text', 'Swag Labs');
		cy.get('#inventory_container').should('be.visible');
	});
	it('GX-21842 | TC3: Validar que se pueda iniciar sesión correctamente con el usuario “performance_glitch_user”', () => {
		loginpage.enterUsername(the.data.valid.performanceUser);
		loginpage.enterPassword(the.data.valid.password);
		loginpage.clickLoginBtn();
		cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');
		cy.get('#header_container').should('contain.text', 'Swag Labs');
		cy.get('#inventory_container').should('be.visible');
	});
	it('GX-21842 | TC4: Validar intentar iniciar sesión con cuenta bloqueada', () => {
		loginpage.enterUsername(the.data.invalid.lockedUser);
		loginpage.enterPassword(the.data.valid.password);
		loginpage.clickLoginBtn();
		cy.contains(the.errorMsg.errorMsg1).should('be.visible');
	});
	it('GX-21842 | TC5: Validar intentar iniciar sesión con cuenta incorrecta o inexistente.', () => {
		loginpage.enterUsername(the.data.invalid.incorrectUser);
		loginpage.enterPassword(the.data.valid.password);
		loginpage.clickLoginBtn();
		cy.contains(the.errorMsg.errorMsg2).should('be.visible');
	});
	it('GX-21842 | TC6: Validar intentar iniciar sesión dejando el campo “Username” vacío en el formulario', () => {
		loginpage.enterPassword(the.data.valid.password);
		loginpage.clickLoginBtn();
		cy.contains(the.errorMsg.errorMsg3).should('be.visible');
	});
	it('GX-21842 | TC7: Validar intentar iniciar sesión dejando el campo “Password” vacío en el formulario', () => {
		loginpage.enterUsername('standard_user');
		loginpage.clickLoginBtn();
		cy.contains(the.errorMsg.errorMsg4).should('be.visible');
	});
	it('GX-21842 | TC8: Validar intentar iniciar sesión dejando los campos “Password”  y “Username” vacíos en el formulario', () => {
		loginpage.clickLoginBtn();
		cy.contains(the.errorMsg.errorMsg3).should('be.visible');
	});
	it('GX-21842 | TC9: Validar intentar ingresar al endpoint “/inventory.html" sin antes iniciar sesión', () => {
		cy.visit('/inventory.html', { failOnStatusCode: false });
		loginpage.get.errorMessage().should('contain.text', the.errorMsg.inventoryErrorMsg).and('be.visible');
	});
	it('GX-21842 | TC10: Validar intentar ingresar al endpoint “/cart.html" sin antes iniciar sesión', () => {
		cy.visit('/cart.html', { failOnStatusCode: false });
		loginpage.get.errorMessage().should('contain.text', the.errorMsg.cartErrorMsg).and('be.visible');
	});
	it('GX-21842 | TC11: Validar intentar ingresar al endpoint “/checkout-step-one.html" sin antes iniciar sesión.', () => {
		cy.visit('/checkout-step-one.html', { failOnStatusCode: false });
		loginpage.get.errorMessage().should('contain.text', the.errorMsg.checkoutErrorMsg1).and('be.visible');
	});
	it('GX-21842 | TC12: Validar intentar ingresar al endpoint “/checkout-step-two.html" sin antes iniciar sesión', () => {
		cy.visit('/checkout-step-two.html', { failOnStatusCode: false });
		loginpage.get.errorMessage().should('contain.text', the.errorMsg.checkoutErrorMsg2).and('be.visible');
	});
	it('GX-21842 | TC13: Validar intentar ingresar al endpoint “/checkout-complete.html" sin antes iniciar sesión', () => {
		cy.visit('/checkout-complete.html', { failOnStatusCode: false });
		loginpage.get.errorMessage().should('contain.text', the.errorMsg.checkoutErrorMsg3).and('be.visible');
	});
});
