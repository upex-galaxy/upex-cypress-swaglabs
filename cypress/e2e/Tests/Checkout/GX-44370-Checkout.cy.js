import { removeLogs } from '@helper/RemoveLogs';

describe('SwagLabs | Checkout | Finalizar o Cancelar la compra de un producto en la Website', () => {
	beforeEach(
		'Precondiciones: usuario debe estar en la home Page, logearse exitosamente y haber realizado el proceso de checkout hasta la confirmación con al menos 1 producto agregado',
		() => {
			cy.visit('https://www.saucedemo.com');
			cy.url().should('contain', 'demo');
			cy.fixture('data/GX-44370-Checkout').then(the => {
				cy.get('[data-test="username"]').type(the.username);
				cy.get('[data-test="password"]').type(the.password);
				cy.get('[data-test="login-button"]').should('be.visible').click();

				cy.get('#add-to-cart-sauce-labs-backpack').click();
				cy.get('.shopping_cart_link').should('exist').click();
				cy.get('#checkout').should('have.text', 'Checkout').click();

				cy.get('[data-test="firstName"]').type(the.form.firstname);
				cy.get('[data-test="lastName"]').type(the.form.lastname);
				cy.get('[data-test="postalCode"]').type(the.form.zip);
				cy.get('#continue').should('be.visible').click();
			});
		}
	);

	it('44371 | TC1: Validar finalizar una compra al hacer click en el botón "Finish"', () => {
		cy.get('#finish').should('be.visible').and('have.text', 'Finish').click();
	});

	it('44371 | TC2: Validar cancelar una compra al hacer click en botón "Cancel"', () => {
		cy.get('#cancel').should('be.visible').and('have.text', 'Cancel').click();
	});
});

removeLogs();
