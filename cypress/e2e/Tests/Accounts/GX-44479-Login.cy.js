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
			cy.url().should('contain', data.pageUrl);
			newAccess.get.messContainer().should('be.visible').and('contain', data.message.lockedMess);
		});
	});
	// it('GX-44479 | TC :  ', () => {});
	// it('GX-44479 | TC :  ', () => {});
});
