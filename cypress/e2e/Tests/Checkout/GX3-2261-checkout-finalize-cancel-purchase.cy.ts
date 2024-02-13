import {faker} from '@faker-js/faker';
describe('GX3-2281: SwagLabs | Checkout | Finalizar o Cancelar la compra de un producto en la Website', () => {
	let dataCheckout = {
		firstName: faker.person.firstName(),
		lastName: faker.person.lastName(),
		postalCode: faker.location.zipCode()
	};
	beforeEach(() => {
		cy.clearAllCookies();
		cy.clearAllLocalStorage();
		// Given user must be on home page
		cy.visit('https://www.saucedemo.com/');
		// and user login sucessfully
		cy.LoginLau();
		cy.url().should('contains','inventory.html');
		// And: el usuario debe haber realizado el proceso de checkout hasta la confirmación con al menos 1 producto añadido
		cy.AddItems();
	});

	it('GX3-2281 | TC1: Should finalize purchace checkout', function () {
		cy.visit('https://www.saucedemo.com/cart.html').then(()=>{
			cy.dataTestElement('remove-','*').should('have.length',Cypress.env('addedProducts'));
			cy.dataTestElement('checkout').click();
			cy.url().should('contains','/checkout-step-one.html');
			//Enter checkout data and continue to step 2
			cy.dataTestElement('firstName').type(dataCheckout.firstName);
			cy.dataTestElement('lastName').type(dataCheckout.lastName);
			cy.dataTestElement('postalCode').type(dataCheckout.postalCode);
			cy.dataTestElement('continue').click();
			//Assertion
			cy.url().should('contains','/checkout-step-two.html');
			cy.get('.cart-item').should('have.length',Cypress.env('addedProducts'));
			cy.get('.cart-item .inventory_item_price').invoke('text').each((el)=>{
				//get addition of items price and compare with total
			});
		});
	});

	it('GX3-2281 | TC1: Should cancel purchace checkout', function () {
		cy.visit('https://www.saucedemo.com/cart.html').then(()=>{
			cy.dataTestElement('remove-','*').should('have.length',Cypress.env('addedProducts'));
			cy.dataTestElement('checkout').click();
			cy.url().should('contains','/checkout-step-one.html');
			cy.dataTestElement('cancel').click();
			//Assertion
			cy.url().should('contains','/cart.html');
			cy.dataTestElement('remove-','*').should('have.length',Cypress.env('addedProducts'));
		});
	});
});
