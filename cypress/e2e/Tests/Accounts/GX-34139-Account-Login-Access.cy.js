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
			login.get.imgItems().then($images => {
				const imageSrcSet = new Set();
				let isDuplicate = false;

				$images.each((index, element) => {
					const src = Cypress.$(element).attr('src');

					if (imageSrcSet.has(src)) {
						// La imagen está repetida
						cy.log(`La imagen con src '${src}' está duplicada.`);
						// Realiza alguna acción adicional si es necesario
						isDuplicate = true;
					} else {
						// Agrega el src al conjunto
						imageSrcSet.add(src);
					}
				});

				cy.wrap(isDuplicate).then(duplicate => {
					expect(duplicate).to.be.false;
				});
			});
		});
	});
	it.skip('34140 | TC02: Validate Log in with username “problem_user” and valid password', () => {
		cy.fixture('data/GX-34139-Account-Login').then(data => {
			login.typeUsername(data.credentials.username.valid[1]);
			login.typePassword(data.credentials.password.valid);
			login.clickLoginButton();
			cy.url().should('include', data.endpoints.inventory);
			login.get.imgItems().should('be.visible');
			/* --Validar que no se repitan las imagenes-- */
			login.get.imgItems().then($images => {
				const imageSrcSet = new Set();
				let isDuplicate = false;

				$images.each((index, element) => {
					const src = Cypress.$(element).attr('src');

					if (imageSrcSet.has(src)) {
						// La imagen está repetida
						cy.log(`La imagen con src '${src}' está duplicada.`);
						// Realiza alguna acción adicional si es necesario
						isDuplicate = true;
					} else {
						// Agrega el src al conjunto
						imageSrcSet.add(src);
					}
				});
				cy.wrap(isDuplicate).then(duplicate => {
					expect(duplicate).to.be.false;
				});
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
			login.get.imgItems().then($images => {
				const imageSrcSet = new Set();
				let isDuplicate = false;

				$images.each((index, element) => {
					const src = Cypress.$(element).attr('src');

					if (imageSrcSet.has(src)) {
						// La imagen está repetida
						cy.log(`La imagen con src '${src}' está duplicada.`);
						// Realiza alguna acción adicional si es necesario
						isDuplicate = true;
					} else {
						// Agrega el src al conjunto
						imageSrcSet.add(src);
					}
				});

				cy.wrap(isDuplicate).then(duplicate => {
					expect(duplicate).to.be.false;
				});
			});
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
