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
		RedesPage.clickTwitter();
		cy.url().should('include','twitter');
	});
	it('5320 | TC2: Validar que se puede acceder exitosamente al link de la red social Facebook',()=>{
		RedesPage.clickFacebook();
		cy.url().should('include','facebook');
	});
	it('5320 | TC3: Validar que se puede acceder exitosamente al link de la red social Linkedin',()=>{
		RedesPage.clickLinkedin();
		cy.url().should('include','linkedin');
	});

});
