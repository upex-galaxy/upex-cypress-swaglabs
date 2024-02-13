/* eslint-disable no-undef */
// ***********************************************
// https://on.cypress.io/custom-commands
// ***********************************************
import { SpaceCheckoutPage } from '@pages/SpaceCheckout.Page';
import { SpaceLoginPage } from '@pages/SpaceLogin.Page';
import { SpaceDestinationPage } from '@pages/SpaceProduct.Page';
import 'cypress-file-upload';
import user from '@data/sauceUsersLau.json';
import { randomNumber } from '@helper/testUtilities';

beforeEach(() => {
	Cypress.on('uncaught:exception', () => false); // returning false here prevents Cypress from failing the test
	cy.intercept({ resourceType: /^(xhr|fetch)$/ }, { statusCode: 200, body: { data: 'fake data' } });
	cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
});

//* Este es el commando principal para usar los Page Object Models sin necesidad de importarlos en cada archivo de test
Cypress.Commands.add('page', () => {
	const page = {
		spaceLoginPage: new SpaceLoginPage(),
		spaceProductPage: new SpaceDestinationPage(),
		spaceCheckoutPage: new SpaceCheckoutPage(),
	};
	return cy.wrap(page);
});

Cypress.Commands.add('react', (dataReactToolbox: string, options?: { hasText: string }) => {
	const selector = `[data-react-toolbox=${dataReactToolbox}]`;
	if (options?.hasText) {
		cy.contains(selector, options.hasText);
	} else {
		cy.get(selector);
	}
});

Cypress.Commands.add('dataTestElement', (id,options=false) => {
	let selector = `[data-test='${id}']`;
	if(options){
		selector = `[data-test${options}='${id}']`;
	}
	return cy.get(selector);
});

Cypress.Commands.add('LoginLau', () => {
	cy.dataTestElement('username').type(user.name.valid);
	cy.dataTestElement('password').type(user.password);
	cy.dataTestElement('login-button').click();
});
Cypress.Commands.add('AddItems', () => {
	cy.dataTestElement('add-to-cart','*').its('length').then((length)=>{
		let  addProducts = randomNumber(length-1,1);
		for (let index = 0; index < addProducts; index++) {
			cy.dataTestElement('add-to-cart','*').its('length').then((length)=>{
				cy.dataTestElement('add-to-cart','*').eq(randomNumber(length-1)).click();
			});
		}
		Cypress.env('addedProducts',addProducts);
	});
});

