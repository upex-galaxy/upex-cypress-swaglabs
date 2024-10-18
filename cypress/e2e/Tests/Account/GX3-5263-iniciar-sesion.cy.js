import {LoginPage} from '../../../support/pages/GX3-5263-iniciar-sesion.Page';

describe('[Automation] SwagLabs | Account | Iniciar sesión y BR de Accesos',()=>{
	beforeEach('PRC: El usuario deberia estar situado en la pagina',()=>{
		cy.visit('https://www.saucedemo.com/');
		cy.url().should('include','demo');
	});

	it('5268 | TC1: Validar que se pueda realizar el login exitoso ',()=>{
		LoginPage.enterUserName('standard_user');
		LoginPage.enterPassword('secret_sauce');
		LoginPage.submitLogin();
		cy.url().should('include', '/inventory');
	});

	it('5268 | TC2: Validar no que se pueda realizar el login cuando la cuenta esta bloqueada ',()=>{
		LoginPage.enterUserName('locked_out_user');
		LoginPage.enterPassword('secret_sauce');
		LoginPage.submitLogin();
		LoginPage.get.labelError().should('contain','Sorry, this user has been locked out.');
	});


	it('5268 | TC3: Validar no que se pueda realizar el login cuando el Username es incorrecto ',()=>{
		LoginPage.enterUserName('prueba');
		LoginPage.enterPassword('secret_sauce');
		LoginPage.submitLogin();
		LoginPage.get.labelError().should('contain','Username and password do not match any user in this service');
	});
	it('5268 | TC4: Validar no que se pueda realizar el login cuando el Password es incorrecto ',()=>{
		LoginPage.enterUserName('standard_user');
		LoginPage.enterPassword('s');
		LoginPage.submitLogin();
		LoginPage.get.labelError().should('contain','Username and password do not match any user in this service');
	});
	it('5268 | TC5: Validar no que se pueda realizar el login cuando el UserName este vacio ',()=>{
		LoginPage.enterUserName('');
		LoginPage.enterPassword('secret_sauce');
		LoginPage.submitLogin();
		LoginPage.get.labelError().should('contain','Username is required');

	});
	it('5268 | TC6: Validar no que se pueda realizar el login cuando el enterPassword este vacio ',()=>{
		LoginPage.enterUserName('standard_user');
		LoginPage.enterPassword('');
		LoginPage.submitLogin();
		LoginPage.get.labelError().should('contain','Password is required');
	});

});
describe('[Automation] SwagLabs | Account | Iniciar sesión y BR de Accesos| EndPoints',()=>{

	it('5268 | TC7: Validar que el usuario no ingrese a un endpoint de la website sin haber iniciado sesión.',()=>{

		cy.visit({url:'https://www.saucedemo.com/inventory.html',failOnStatusCode:false});

		LoginPage.get.labelError().should('contain','You can only access \'/inventory.html\' when you are logged in.');
	});

});