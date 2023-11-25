import { newAccess } from '../../../support/pages/GX-44479-loginPage';

describe('GX-44479 | Swag-Labs | Account | Iniciar sesión y BRs de accesos', () => {
	beforeEach('Precondición: Usuario debe estar en la pagina de inicio de sesión', () => {
		cy.fixture('data/GX-44479-loginData').then(data => {
			cy.visit(data.pageUrl);
			newAccess.get.loginBox().should('exist').and('be.visible');
		});
	});
	it('GX-44479 | TC1 : Validar poder acceder exitosamente como ´standard user´', () => {
		cy.fixture('data/GX-44479-loginData').then(data => {
			newAccess.typeUsername(data.credentials.standardUser);
			newAccess.typePassword(data.credentials.password);
			newAccess.submitLogin();
			cy.url().should('contain', data.endpoint.inventory);
		});
	});
	it('GX-44479 | TC2: Validar poder acceder exitosamente como ´problem´ user ', () => {
		cy.fixture('data/GX-44479-loginData').then(data => {
			newAccess.typeUsername(data.credentials.problemUser);
			newAccess.typePassword(data.credentials.password);
			newAccess.submitLogin();
			cy.url().should('contain', data.endpoint.inventory);
		});
	});
	it('GX-44479 | TC3: Validar poder acceder exitosamente como ´performance_glitch´ user ', () => {
		cy.fixture('data/GX-44479-loginData').then(data => {
			newAccess.typeUsername(data.credentials.performanceUser);
			newAccess.typePassword(data.credentials.password);
			newAccess.submitLogin();
			cy.url().should('contain', data.endpoint.inventory);
		});
	});
	it('GX-44479 | TC4: Validar NO poder acceder como ´locked´ user ', () => {
		cy.fixture('data/GX-44479-loginData').then(data => {
			newAccess.typeUsername(data.credentials.lockedUser);
			newAccess.typePassword(data.credentials.password);
			newAccess.submitLogin();
			cy.url().should('not.contain', data.endpoint.inventory);
			newAccess.get.messContainer().should('be.visible').and('contain', data.message.lockedMess);
		});
	});
	it('GX-44479 | TC5: Validar NO poder acceder con username no registrado ', () => {
		cy.fixture('data/GX-44479-loginData').then(data => {
			newAccess.typeUsername(data.credentials.invalidUser);
			newAccess.typePassword(data.credentials.password);
			newAccess.submitLogin();
			cy.url().should('not.contain', data.endpoint.inventory);
			newAccess.get.messContainer().should('be.visible').and('contain', data.message.noMatchMess);
		});
	});
	it('GX-44479 | TC6: Validar NO poder acceder con password no registrado ', () => {
		cy.fixture('data/GX-44479-loginData').then(data => {
			newAccess.typeUsername(data.credentials.standardUser);
			newAccess.typePassword(data.credentials.invalidPass);
			newAccess.submitLogin();
			cy.url().should('not.contain', data.endpoint.inventory);
			newAccess.get.messContainer().should('be.visible').and('contain', data.message.noMatchMess);
		});
	});
	it('GX-44479 | TC7: Validar NO poder acceder con username vacío ', () => {
		cy.fixture('data/GX-44479-loginData').then(data => {
			newAccess.typePassword(data.credentials.password);
			newAccess.submitLogin();
			cy.url().should('not.contain', data.endpoint.inventory);
			newAccess.get.messContainer().should('be.visible').and('contain', data.message.noUsernameMess);
		});
	});
	it('GX-44479 | TC8: Validar NO poder acceder con password vacío', () => {
		cy.fixture('data/GX-44479-loginData').then(data => {
			newAccess.typeUsername(data.credentials.standardUser);
			newAccess.submitLogin();
			cy.url().should('not.contain', data.endpoint.inventory);
			newAccess.get.messContainer().should('be.visible').and('contain', data.message.noPassMess);
		});
	});
	it('GX-44479 | TC9: Validar NO poder acceder con campos username y password vacíos', () => {
		cy.fixture('data/GX-44479-loginData').then(data => {
			newAccess.submitLogin();
			cy.url().should('not.contain', data.endpoint.inventory);
			newAccess.get.messContainer().should('be.visible').and('contain', data.message.noUsernameMess);
		});
	});
	it('GX-44479 | TC10: Validar NO poder acceder al endpoint ´inventory.html´ ', () => {
		cy.fixture('data/GX-44479-loginData').then(data => {
			cy.visit(data.pageUrl + data.endpoint.inventory, { failOnStatusCode: false });
			cy.url().should('not.contain', data.endpoint.inventory);
			newAccess.get.messContainer().should('be.visible').and('contain', data.message.errorInventory);
		});
	});
	it('GX-44479 | TC11: Validar NO poder acceder al endpoint ´cart.html´ ', () => {
		cy.fixture('data/GX-44479-loginData').then(data => {
			cy.visit(data.pageUrl + data.endpoint.cart, { failOnStatusCode: false });
			cy.url().should('not.contain', data.endpoint.cart);
			newAccess.get.messContainer().should('be.visible').and('contain', data.message.errorCart);
		});
	});
	it('GX-44479 | TC12: Validar NO poder acceder al endpoint ´checkout_step_one.html´', () => {
		cy.fixture('data/GX-44479-loginData').then(data => {
			cy.visit(data.pageUrl + data.endpoint.check1, { failOnStatusCode: false });
			cy.url().should('not.contain', data.endpoint.check1);
			newAccess.get.messContainer().should('be.visible').and('contain', data.message.errorCheckout1);
		});
	});
	it('GX-44479 | TC13: Validar NO poder acceder al endpoint ´checkout_step_two.html´', () => {
		cy.fixture('data/GX-44479-loginData').then(data => {
			cy.visit(data.pageUrl + data.endpoint.check2, { failOnStatusCode: false });
			cy.url().should('not.contain', data.endpoint.check2);
			newAccess.get.messContainer().should('be.visible').and('contain', data.message.errorCheckout2);
		});
	});
	it('GX-44479 | TC14: Validar NO poder acceder al endpoint ´checkout_complete.html´', () => {
		cy.fixture('data/GX-44479-loginData').then(data => {
			cy.visit(data.pageUrl + data.endpoint.complete, { failOnStatusCode: false });
			cy.url().should('not.contain', data.endpoint.complete);
			newAccess.get.messContainer().should('be.visible').and('contain', data.message.errorCheckoutCompleto);
		});
	});
});
