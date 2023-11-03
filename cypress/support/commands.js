// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
import 'cypress-file-upload';
import 'cypress-wait-until';
import '@4tw/cypress-drag-drop';
import 'cypress-downloadfile/lib/downloadFileCommand';
import { loginExample } from '@pages/Login.Page';
const { authLogin, dashboardIndex } = Cypress.env('endpoint');
import { signin } from '@pages/SignIn.Page.js';
import { initSessionSwagLabs } from '@pages/loginLCasco2.Page';
const { login } = Cypress.env('swagLabs');
const { baseUrl } = Cypress.env();

import { loginPage } from '@pages/GX-41928-Login.Page';

Cypress.Commands.add('visitEndpoint', (endpoint, valueAssert) => {
	cy.visit(`/${endpoint}`, { failOnStatusCode: false });
	loginPage.get.loginError().should('have.text', valueAssert);
});

Cypress.Commands.add('fillFormAndSubmit', (userName, password, valueAssert) => {
	userName && loginPage.typeUserName(userName);
	userName && loginPage.get.userName().should('have.text', 'user');
	password && loginPage.typePassword(password);
	password && loginPage.get.password().should('have.text', 'secret');
	loginPage.selectLoginButton();
	if (valueAssert === 'Swag Labs') {
		loginPage.get.exitLogin().should('have.text', valueAssert);
	} else {
		loginPage.get.loginError().should('have.text', valueAssert);
	}
});

// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('Login', (username, password) => {
	cy.session('login', () => {
		cy.visit('https://www.saucedemo.com/');
		cy.url().should('contain', 'saucedemo');
		cy.get('[name = "user-name"]').type(username);
		cy.get('[name= "password"]').type(password);
		cy.get('[type= "submit"]').click();
		cy.url().should('include', 'inventory');

		/*cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php');
		cy.url().should('contain', authLogin);
		username && loginExample.enterUsername(username);
		password && loginExample.enterPassword(password);
		loginExample.submitLogin();

		cy.url().should('contain', dashboardIndex);*/
	});
});

Cypress.Commands.add('SignIn', () => {
	const { username, password } = Cypress.env('user');
	const { signUp } = Cypress.env('endpoint');
	cy.session('signIn', () => {
		cy.visit(signUp);
		signin.goToLoginTab();
		signin.enterUsername(username);
		signin.enterPassword(password);
		signin.submitLogin();
	});
});
Cypress.Commands.add('getActualOrder', () => {
	cy.get('.inventory_item').each(item => {
		cy.wrap(item).within(() => {
			cy.get('.inventory_item_name').then(name => {
				let productName = name.text();
				Cypress.env('itemNames').push(productName);
			});
			cy.get('.inventory_item_price').then(price => {
				let productPrice = parseFloat(price.text().replace('$', ''));
				Cypress.env('itemPrices').push(productPrice);
			});
		});
	});
});

Cypress.Commands.add('loginSuccess', () => {
	cy.visit(baseUrl);
	cy.url().should('contain', 'sauce');
	//login
	initSessionSwagLabs.inputUserName(login.users.correctUser);
	initSessionSwagLabs.inputPassword(login.users.correctPass);
	initSessionSwagLabs.clickButtonLogin();
});

Cypress.Commands.add('addToCardOneRandomItem', () => {
	cy.get('.inventory_list')
		.children()
		.then(items => {
			const itemsQuantity = items.length;
			let randomItemIndex = Math.floor(Math.random() * itemsQuantity) - 1;
			cy.wrap(items)
				.eq(randomItemIndex)
				.within(() => {
					cy.get('button').click();
				});
		});
});

import { plp } from '@pages/PLP.Page';
Cypress.Commands.add('addFromPLP', index => {
	plp.get.productList().then(elements => {
		cy.wrap(elements)
			.eq(index)
			.within(() => {
				plp.get.itemButton().click();

				plp.get.productPrice().then(elementPrice => {
					Cypress.env('itemPrice', elementPrice.text());
				});
				plp.get.productName().then(elementName => {
					Cypress.env('itemName', elementName.text());
				});
				plp.get.productDesc().then(elementDesc => {
					Cypress.env('itemDesc', elementDesc.text());
				});
			});
	});
});

import { pdp } from '@pages/PDP.Page';
Cypress.Commands.add('addFromPDP', () => {
	pdp.get.product().then(elements => {
		cy.wrap(elements).within(() => {
			pdp.itemButtonClick();
			pdp.get.productPrice().then(elementPrice => {
				Cypress.env('itemPrice', elementPrice.text());
			});
			pdp.get.productName().then(elementName => {
				Cypress.env('itemName', elementName.text());
			});
			pdp.get.productDesc().then(elementDesc => {
				Cypress.env('itemDesc', elementDesc.text());
			});
		});
	});
});
