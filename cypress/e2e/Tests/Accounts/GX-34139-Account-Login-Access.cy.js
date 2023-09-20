import { login } from '../../../support/pages/GX-34139-Account-Login';

describe('TS34140 | ✅SwagLabs | Account | Iniciar sesión y BR de Accesos', () => {
	beforeEach('Precondicion: The user has register and stay in login page', () => {
		cy.fixture('data/GX-34139-Account-Login').then(data => {
			cy.visit(data.url.loginPage);
		});
	});
	it('34140 | TC01: Validate Log-in with username “standard_user” and valid password', () => {
		cy.fixture('data/GX-34139-Account-Login').then(data => {
			login.typeUsername(data.credentials.username.valid[0]);
			login.typePassword(data.credentials.password.valid);
			login.clickLoginButton();
			cy.url().should('include', data.endpoints.inventory);
			login.get.imgItems().should('be.visible');
		});
	});
	it.only('34140 | TC02: Validate Log in with username “problem_user” and valid password', () => {
		cy.fixture('data/GX-34139-Account-Login').then(data => {
			login.typeUsername(data.credentials.username.valid[1]);
			login.typePassword(data.credentials.password.valid);
			login.clickLoginButton();
			cy.url().should('include', data.endpoints.inventory);
			login.get.imgItems().should('be.visible');
			//login.get.dogImg().should('have.length', 1); --> desactivar luego de pruebas
			//cy.log(login.get.imgItems().eq(1).invoke('attr', 'src'));

			// login.get.imgItems().then(arrayImg => {
			// 	Cypress.env('array', arrayImg);
			// 	for (let i = 0; i < Cypress.env('array'); i++) {
			// 		if (
			// 			Cypress.env('array').eq(i).invoke('attr', 'src') ==
			// 			Cypress.env('array')
			// 				.eq(i + 1)
			// 				.invoke('attr', 'src')
			// 		) {
			// 			return cy.log('1');
			// 			return Cypress.env('repeatImg', true);
			// 		}
			// 		return cy.log('2');
			// 		return Cypress.env('repeatImg').should('be.false');
			// 	}
			// 	cy.log('3');
			// });
			// Obtén todas las imágenes de la página
			login.get.imgItems.each(($el, index, $list) => {
				const src = $el.attr('src');
				const duplicate = $list.some(($img, i) => i !== index && Cypress.$($img).attr('src') === src);

				if (duplicate) {
					cy.log(`La imagen con src '${src}' está duplicada.`);
					// Perform additional actions if needed
				}
			});
		});
	});
	it('34140 | TC03: Validate Log in with username “performance_glitch_user” and valid password', () => {
		cy.fixture('data/GX-34139-Account-Login').then(data => {
			login.typeUsername(data.credentials.username.valid[2]);
			login.typePassword(data.credentials.password.valid);
			login.clickLoginButton();
			cy.url().should('include', data.endpoints.inventory);
			login.get.imgItems().should('be.visible');
		});
	});
	it('34140 | TC04: Validate dont Log in with locked username', () => {
		cy.fixture('data/GX-34139-Account-Login').then(data => {
			login.typeUsername(data.credentials.username.blocked);
			login.typePassword(data.credentials.password.valid);
			login.clickLoginButton();
			login.get.errorMessage().should('have.text', data.errorMessage.usernameBlocked);
			cy.url().should('not.include', data.endpoints.inventory);
		});
	});
	it('34140 | TC05: Validate dont Log in with inexist passwor', () => {
		cy.fixture('data/GX-34139-Account-Login').then(data => {
			login.typeUsername(data.credentials.username.valid[0]);
			login.typePassword(data.credentials.password.invalid);
			login.clickLoginButton();
			login.get.errorMessage().should('have.text', data.errorMessage.notMatch);
			cy.url().should('not.include', data.endpoints.inventory);
		});
	});
	it('34140 | TC06: Validate dont Log in with inexist username', () => {
		cy.fixture('data/GX-34139-Account-Login').then(data => {
			login.typeUsername(data.credentials.username.invalid);
			login.typePassword(data.credentials.password.valid);
			login.clickLoginButton();
			login.get.errorMessage().should('have.text', data.errorMessage.notMatch);
			cy.url().should('not.include', data.endpoints.inventory);
		});
	});
	it('34140 | TC07: Validate dont Log in with inexist credentials', () => {
		cy.fixture('data/GX-34139-Account-Login').then(data => {
			login.typeUsername(data.credentials.username.invalid);
			login.typePassword(data.credentials.password.invalid);
			login.clickLoginButton();
			login.get.errorMessage().should('have.text', data.errorMessage.notMatch);
			cy.url().should('not.include', data.endpoints.inventory);
		});
	});
	it('34140 | TC08: Validate dont Log in with empty username', () => {
		cy.fixture('data/GX-34139-Account-Login').then(data => {
			login.typePassword(data.credentials.password.valid);
			login.clickLoginButton();
			login.get.errorMessage().should('have.text', data.errorMessage.usernameNull);
			cy.url().should('not.include', data.endpoints.inventory);
		});
	});
	it('34140 | TC09: Validate dont Log in with empty password', () => {
		cy.fixture('data/GX-34139-Account-Login').then(data => {
			login.typeUsername(data.credentials.username.valid[0]);
			login.clickLoginButton();
			login.get.errorMessage().should('have.text', data.errorMessage.passwordNull);
			cy.url().should('not.include', data.endpoints.inventory);
		});
	});
	it('34140 | TC10: Validate dont Log in with empty credentials', () => {
		cy.fixture('data/GX-34139-Account-Login').then(data => {
			login.clickLoginButton();
			login.get.errorMessage().should('have.text', data.errorMessage.usernameNull);
			cy.url().should('not.include', data.endpoints.inventory);
		});
	});
	it('34140 | TC11: Validate dont redirect to /inventory.html with non log in', () => {
		cy.fixture('data/GX-34139-Account-Login').then(data => {
			cy.visit({ url: data.endpoints.inventory, failOnStatusCode: false });
			login.get.errorMessage().should('have.text', data.errorMessage.dontRedirect.inventory);
			cy.url().should('not.include', data.endpoints.inventory);
		});
	});
	it('34140 | TC12: Validate dont redirect to /cart.html with non log in', () => {
		cy.fixture('data/GX-34139-Account-Login').then(data => {
			cy.visit({ url: data.endpoints.cart, failOnStatusCode: false });
			login.get.errorMessage().should('have.text', data.errorMessage.dontRedirect.cart);
			cy.url().should('not.include', data.endpoints.cart);
		});
	});
	it('34140 | TC13: Validate dont redirect to /checkout-step-one.html with non log in', () => {
		cy.fixture('data/GX-34139-Account-Login').then(data => {
			cy.visit({ url: data.endpoints.checkoutStep1, failOnStatusCode: false });
			login.get.errorMessage().should('have.text', data.errorMessage.dontRedirect.checkoutStep1);
			cy.url().should('not.include', data.endpoints.checkoutStep1);
		});
	});
	it('34140 | TC14: Validate dont redirect to /checkout-step-two.html with non log in', () => {
		cy.fixture('data/GX-34139-Account-Login').then(data => {
			cy.visit({ url: data.endpoints.checkoutStep2, failOnStatusCode: false });
			login.get.errorMessage().should('have.text', data.errorMessage.dontRedirect.checkoutStep2);
			cy.url().should('not.include', data.endpoints.checkoutStep2);
		});
	});
	it('34140 | TC15: Validate dont redirect to /checkout-complete.html with non log in', () => {
		cy.fixture('data/GX-34139-Account-Login').then(data => {
			cy.visit({ url: data.endpoints.checkoutComplete, failOnStatusCode: false });
			login.get.errorMessage().should('have.text', data.errorMessage.dontRedirect.checkoutComplete);
			cy.url().should('not.include', data.endpoints.checkoutComplete);
		});
	});
});
import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
