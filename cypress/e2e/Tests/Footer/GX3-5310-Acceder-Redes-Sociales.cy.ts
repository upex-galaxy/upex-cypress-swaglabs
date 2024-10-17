import {RedesPage} from '../../../support/pages/GX3-5310-Acceder-Redes-Sociales.Page';

describe('[Automation] SwagLabs | Footer | Acceder a las redes sociales de SwagLabs',()=>{
	beforeEach('PRC: El usuario deberia estar situado en la pagina Invetory.',()=>{
		cy.visit('https://www.saucedemo.com/');
		RedesPage.enterUserName('standard_user');
		RedesPage.enterPassword('secret_sauce');
		RedesPage.submitLogin();
		cy.url().should('include', '/inventory');
	});
	it('5320 | TC1: Validar que se puede acceder exitosamente al link de la red social Twitter',()=>{
		cy.intercept('*/x.com/**').as('redSocialtwitter');
		RedesPage.clickRedesSociales('twitter');
		cy.url().should('include','x.com');
		cy.wait('@redSocialtwitter').then (resp =>{
			expect(resp.response?.statusCode).equal(200);

		});

	});
	it('5320 | TC2: Validar que se puede acceder exitosamente al link de la red social Facebook',()=>{
		cy.intercept('*/www.facebook.com/**').as('redSocialfacebook');
		RedesPage.clickRedesSociales('facebook');
		cy.url().should('include','facebook');
		cy.wait('@redSocialfacebook').then (resp =>{
			expect(resp.response?.statusCode).equal(200);
		});
	});
	it('5320 | TC3: Validar que se puede acceder exitosamente al link de la red social Linkedin',()=>{
		cy.intercept('*/www.linkedin.com/**').as('redSociallinkedin');
		RedesPage.clickRedesSociales('linkedin');
		cy.url().should('include','linkedin');
		cy.wait('@redSociallinkedin').then (resp =>{
			expect(resp.response?.statusCode).equal(200);
		});
	});

});
