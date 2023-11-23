const { newAccess } = require('../../support/pages/GX-44479-loginPage');

describe('GX-44479 | Swag-Labs | Account | Iniciar sesión y BRs de accesos', () => {
	beforeEach('Precondición: Usuario debe estar en la pagina de inicio de sesión', () => {
		cy.fixture('data/GX-44479-loginData').then(the => {
			cy.visit(the.pageUrl);
			newAccess.loginBox().should('exist').and('be.visible');
		});
	});
	it.only('GX-44479 | TC1 : Validar poder acceder exitosamente como ´standard user´', () => {
		cy.fixture('data/GX-44479-loginData').then(the => {
			newAccess.typeUsername(the.standard);
			newAccess.typePassword(the.password);
			newAccess.submitLogin();
			cy.url().should('contain', the.inventory);
		});
	});
	// it('GX-44479 | TC2 : ', () => {});
	// it('GX-44479 | TC :  ', () => {});
	// it('GX-44479 | TC :  ', () => {});
	// it('GX-44479 | TC :  ', () => {});
	// it('GX-44479 | TC :  ', () => {});
});
