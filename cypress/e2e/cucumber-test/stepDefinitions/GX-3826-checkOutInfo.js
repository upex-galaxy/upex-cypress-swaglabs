import { Given, When, And, Then } from '@badeball/cypress-cucumber-preprocessor';

// @US_GX-3826
context('SwagLabs | Checkout Info | Insertar información del comprador.', () => {
	// Background:
	// #@PREC_GX-3895
	Given('El usuario ingresa a la WebPage de Swag Labs con una cuenta valida', () => {
		cy.visit('https://www.saucedemo.com/');
		cy.fixture('DOM/space/Login.Page').then(the => {
			cy.get(the.input.username).type(the.data.user);
			cy.get(the.input.password).type(the.data.password);
			cy.get('#login-button').click();
		});
	});
	And('El usuario agrega un producto al SC', () => {
		cy.get('button[name^=\'add\']')
			.eq(3)
			// .should(contains, "Add to cart"
			.click();
	});
	And('El usuario ingresa al SCP', () => {
		cy.get('.shopping_cart_link').click();
		// cy.url().should(contains, "cart")
	});

	And('El usuario presiona el Botón de CHECKOUT', () => {
		cy.get('#checkout').should('be.visible').click();
	});

	// # @TC_GX-3894 @TS_GX-3827 @Gherkin
	describe('3827 | TC1:  Validar cuando los datos sean validos dispare la BR1', () => {
		When(
			'Rellenara los campos de First Name con {string} el campo de Last Name con {string} y el campo Zip con {string}',
			(FirstName, LastName, Zip) => {
				cy.get('[placeholder=\'First Name\']').type(FirstName);
				cy.get('[placeholder=\'Last Name\']').type(LastName);
				cy.get('[placeholder=\'Zip/Postal Code\']').type(Zip);
				cy.get('#continue').click();
			}
		);

		Then('Comprobara que se disparen las BR corespondientes', () => {
			cy.url().should('contains', 'two');
			cy.get('#finish').click();
		});
	});

	// # @TC_GX-3899 @TS_GX-3827 @Gherkin
	describe('3827 | TC2:  Validar cuando no se ingresen datos dispare BR2, BR3, BR4, BR5, BR6, BR7, BR8, BR9 Respectivamente', () => {
		Then(
			'Rellenara los campos de First Name con {string}, el campo de Last Name con {string}, y el campo Zip con {string}',
			(FirstName, LastName, Zip) => {
				FirstName && cy.get('[placeholder=\'First Name\']').type(FirstName);
				LastName && cy.get('[placeholder=\'Last Name\']').type(LastName);
				Zip && cy.get('[placeholder=\'Zip/Postal Code\']').type(Zip);
				cy.get('#continue').click();
			}
		);

		And('Comprobara que se disparen los {string} corespondientes', LogError => {
			cy.get('[data-test=\'error\']').should('include.text', LogError);
		});
	});

	// # @TC_GX-4176 @TS_GX-3827 @Gherkin
	describe('3827 | TC3: Validar Funcion del Botón Cancel de Checkout - step - one Page', () => {
		Then('El usuario presiona el botón Cancel', () => {
			cy.get('#cancel').click();
		});
		And('Regresará al SCP', () => {
			cy.url().should('contains', 'cart');
		});
	});
});
