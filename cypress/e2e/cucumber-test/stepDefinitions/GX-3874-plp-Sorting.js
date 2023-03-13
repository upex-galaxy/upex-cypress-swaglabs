import { Given, When, And, Then } from '@badeball/cypress-cucumber-preprocessor';

context('SwagLabs | PLP Sorting | Filtrar productos por nombre o precio', () => {
	let expectedOrder;
	let finalOrder;
	let initOrder;
	let expectedOrderPrice;
	let initOrderPrice;
	let finalOrderPrice;

	Given('el usuario debe encontarse logeado en la home page', () => {
		cy.visit('https://www.saucedemo.com/');
		cy.fixture('DOM/space/Login.Page.json').then(the => {
			cy.get(the.input.username).type(the.data.user);
			cy.get(the.input.password).type(the.data.password);
			cy.get('[data-test="login-button"]').click();
		});
	});
	And('visualizar al menos 2 productos disponibles con diferentes nombres y precios', () => {
		cy.get('.inventory_item').should('have.length.at.least', 2);
		Cypress.env('itemNames', []);
		Cypress.env('itemPrices', []);
	});
	And('visualizar el filtro seleccionado por default: NAME A TO Z', () => {
		cy.get('.select_container').children('.active_option').should('contain', 'Name (A to Z)');

		cy.getActualOrder().then(() => {
			initOrder = Cypress.env('itemNames');
			expectedOrder = initOrder;
			initOrderPrice = Cypress.env('itemPrices');
			expectedOrderPrice = initOrderPrice;
		});
	});

	describe('3875 | TC1: Validar filtrar productos por NOMBRE descendente', () => {
		When('seleccionar filtro Name Z to A', () => {
			cy.get('.select_container select').select('za');
			cy.get('.select_container select').should('have.value', 'za');
		});

		Then('Chequear que los productos se organizan de la Z a la A', () => {
			cy.log(`✅ Order Anterior: ${initOrder}`);
			cy.getActualOrder().then(() => {
				finalOrder = Cypress.env('itemNames');
				expectedOrder.reverse();
				cy.log(`✅ Order esperado: ${expectedOrder}`);
				expect(finalOrder).to.equal(expectedOrder);
			});
		});
	});

	describe('3875 | TC2: Validar filtrar productos por NOMBRE ascendente', () => {
		When('seleccionar filtro Name A to Z', () => {
			cy.get('.select_container select').select('za');
			cy.get('.select_container select').select('az');
			cy.get('.select_container select').should('have.value', 'az');
		});

		Then('Chequear que los productos se organizan de la A a la Z', () => {
			cy.getActualOrder().then(() => {
				finalOrder = Cypress.env('itemNames');
				expectedOrder.sort();
				cy.log(`✅ Order esperado: ${expectedOrder}`);
				expect(finalOrder).to.equal(expectedOrder);
			});
		});
	});

	describe('3875 | TC3: Validar filtrar productos por PRECIO ascendente', () => {
		When('seleccionar filtro Price Low to high', () => {
			cy.log(`✅ Order Anterior: ${initOrderPrice}`);
			cy.get('.select_container select').select('lohi');
			cy.get('.select_container select').should('have.value', 'lohi');
		});

		Then('Chequear que los productos se organizan según su precio desde el más económico al más caro', () => {
			cy.getActualOrder().then(() => {
				finalOrderPrice = Cypress.env('itemPrices');
				expectedOrderPrice.sort(function (a, b) {
					return a - b;
				});
				cy.log(`✅ Order esperado: ${expectedOrderPrice}`);
				expect(finalOrderPrice).to.equal(expectedOrderPrice);
			});
		});
	});

	describe('3875 | TC4: Validar filtrar productos por PRECIO descendente', () => {
		When('seleccionar filtro Price High to low', () => {
			cy.log(`✅ Order Anterior: ${initOrderPrice}`);
			cy.get('.select_container select').select('hilo');
			cy.get('.select_container select').should('have.value', 'hilo');
		});
		Then('Chequear que los productos se organizan según su precio desde el más caro al más económico', () => {
			cy.getActualOrder().then(() => {
				finalOrderPrice = Cypress.env('itemPrices');
				expectedOrderPrice
					.sort(function (a, b) {
						return a - b;
					})
					.reverse();
				cy.log(`✅ Order esperado: ${expectedOrderPrice}`);
				expect(finalOrderPrice).to.equal(expectedOrderPrice);
			});
		});
	});
});
