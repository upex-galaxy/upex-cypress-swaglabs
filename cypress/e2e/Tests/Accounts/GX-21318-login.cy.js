import the from '../../../fixtures/data/GX-21318/ToolsQA-LogIn.json';
describe('GX-21318-✅-swag-labs-account-iniciar-sesion-y-br-de-accesos', () => {
	beforeEach('Having access to the SUT', () => {
		cy.visit('https://www.saucedemo.com/');
	});

	it('GX-21319 | TC1: Validate user can log in with username “standard_user” successfully.', () => {
		cy.get(the.userone.input).type(the.userone.data.valid);
		cy.get(the.password.input).type(the.password.data.valid);
		cy.get(the.loginbutton).click();
		cy.get(the.assertpagetwo.input);
	});
	it('GX-21319 | TC2: Validate user can log in with username “problem_user” successfully.', () => {
		cy.get(the.usertwo.input).type(the.usertwo.data.valid);
		cy.get(the.password.input).type(the.password.data.valid);
		cy.get(the.loginbutton).click();
		cy.get(the.assertpagetwo.input);
	});
	it('GX-21319 | TC3: Validate user can log in with username “performance_glitch_user” successfully.', () => {
		cy.get(the.userthree.input).type(the.userthree.data.valid);
		cy.get(the.password.input).type(the.password.data.valid);
		cy.get(the.loginbutton).click();
		cy.get(the.assertpagetwo.input);
	});
	it('GX-21319 | TC4: Validate user can’t log in with username “locked_out_user”.', () => {
		cy.get(the.userblocked.input).type(the.userblocked.data.valid);
		cy.get(the.password.input).type(the.password.data.valid);
		cy.get(the.loginbutton).click();
		cy.get(the.element).should('have.text', the.lockedmsg);
	});
	it('GX-21319 | TC5: Validate log in with username and password that is not on database.', () => {
		cy.get(the.userone.input).type(the.userone.data.invalid);
		cy.get(the.password.input).type(the.password.data.invalid);
		cy.get(the.loginbutton).click();
		cy.get(the.element).should('have.text', the.invalidmsg);
	});
	it('GX-21319 | TC6: Validate log in with empty field on username and valid password.', () => {
		cy.get(the.userone.input).should('be.empty');
		cy.get(the.password.input).type(the.password.data.valid);
		cy.get(the.loginbutton).click();
		cy.get(the.element).should('have.text', the.usermsg);
	});
	it('GX-21319 | TC7: Validate log in with empty field on password and valid username.', () => {
		cy.get(the.userone.input).type(the.userone.data.valid);
		cy.get(the.password.input).should('be.empty');
		cy.get(the.loginbutton).click();
		cy.get(the.element).should('have.text', the.passwordmsg);
	});
	it('GX-21319 | TC8: Validate log in with empty field on username and password.', () => {
		cy.get(the.userone.input).should('be.empty');
		cy.get(the.password.input).should('be.empty');
		cy.get(the.loginbutton).click();
		cy.get(the.element).should('have.text', the.usermsg);
	});
	it('GX-21319 | TC9: Validate user can’t access endpoint “/inventory.html” without being logged in.', () => {
		cy.visit('/inventory.html', { failOnStatusCode: false });
		cy.get(the.element).should('have.text', the.inventorymsg);
	});
	it('GX-21319 | TC10: Validate user can’t access endpoint “/cart.html” without being logged in.', () => {
		cy.visit('/cart.html', { failOnStatusCode: false });
		cy.get(the.element).should('have.text', the.cartmsg);
	});
	it('GX-21319 | TC11: Validate user can’t access endpoint “/checkout-step-one.html” without being logged in.', () => {
		cy.visit('/checkout-step-one.html', { failOnStatusCode: false });
		cy.get(the.element).should('have.text', the.steponemsg);
	});
	it('GX-21319 | TC12: Validate user can’t access endpoint “/checkout-step-two.html” without being logged in.', () => {
		cy.visit('/checkout-step-two.html', { failOnStatusCode: false });
		cy.get(the.element).should('have.text', the.steptwomsg);
	});
	it('GX-21319 | TC13: Validate user can’t access endpoint “/checkout-complete.html” without being logged in.', () => {
		cy.visit('/checkout-complete.html', { failOnStatusCode: false });
		cy.get(the.element).should('have.text', the.stepcompletemsg);
	});
});
//Se importa la funcion
import { removeLogs } from '@helper/RemoveLogs';

//Se ejecuta la funcion para evitar los errores (puedes hacerlo al final de tu codigo)
removeLogs();
