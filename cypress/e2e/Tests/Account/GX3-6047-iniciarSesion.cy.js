import {loginPage} from '../../../support/pages/GX3-6047-iniciarSesion.page.js';
describe ('GX3-6047 SwagLabs | Account | Iniciar sesión y BR de Accesos', () =>{
	beforeEach ('PRC Visitar la pagina de SwagLabs', () => {
		cy.visit('https://www.saucedemo.com');
		cy.url().should('contain', 'saucedemo');
		cy.get('.login_logo').should('exist');
	});

	it('TC01 Validar inicio de sesion satisfactoriamente', () =>{
		cy.fixture('data/GX3-6047-login').then(data =>{
			loginPage.typeUserName(data.userName.userNameValido);
			loginPage.elements.userName().should('have.value', data.userName.userNameValido);
			loginPage.typePassword(data.password.passwordValido);
			loginPage.elements.password().should('have.value', data.password.passwordValido);
			loginPage.clicksubmit();
			cy.url().should('contain', data.inventoryURL);
			loginPage.elements.tittlePage1().should('have.text', 'Products');
		});
	});
	it('TC02 Validar No poder iniciar sesion cuando el usuario ha sido bloqueado', () =>{
		cy.fixture('data/GX3-6047-login').then(data =>{
			loginPage.typeUserName(data.userName.userNameBlocqued);
			loginPage.elements.userName().should('have.value', data.userName.userNameBlocqued);
			loginPage.typePassword(data.password.passwordValido);
			loginPage.elements.password().should('have.value', data.password.passwordValido);
			loginPage.clicksubmit();
			loginPage.elements.labelError().should('be.visible');
			loginPage.elements.labelError().should('contain.text', 'Epic sadface: Sorry, this user has been locked out');
		});
	});
	it('TC03 Validar No poder iniciar sesion ingresando Usuario Invalido', () =>{
		cy.fixture('data/GX3-6047-login').then(data =>{
			loginPage.typeUserName(data.userName.userNameInvalido);
			loginPage.elements.userName().should('have.value', data.userName.userNameInvalido);
			loginPage.typePassword(data.password.passwordInvalido);
			loginPage.elements.password().should('have.value', data.password.passwordInvalido);
			loginPage.clicksubmit();
	        loginPage.elements.mensError().should('be.visible');
			loginPage.elements.mensError().should('contain.text', 'Epic sadface: Username and password do not match any user in this service');
		});
	});
	it('TC04 Validar No poder iniciar sesion dejando campos vacíos', () =>{
		cy.fixture('data/GX3-6047-login').then(data =>{
			loginPage.elements.userName().should('not.have.value');
			loginPage.typePassword(data.password.passwordValido);
			loginPage.elements.password().should('have.value', data.password.passwordValido);
			loginPage.clicksubmit();
	        loginPage.elements.mensError().should('be.visible');
			loginPage.elements.mensError().should('contain.text', 'Epic sadface: Username is required');
		});
	});
	it('TC05 Validar No poder iniciar sesion dejando campos vacíos', () =>{
		cy.fixture('data/GX3-6047-login').then(data =>{
			loginPage.typeUserName(data.userName.userNameBlocqued);
			loginPage.elements.userName().should('have.value', data.userName.userNameBlocqued);
			loginPage.elements.password().should('not.have.value');
			loginPage.clicksubmit();
	        loginPage.elements.mensError().should('be.visible');
			loginPage.elements.mensError().should('contain.text', 'Epic sadface: Password is required');
		});
	});
	it('TC06 Validar No poder iniciar sesion dejando campos vacíos', () =>{
		cy.fixture('data/GX3-6047-login').then(data =>{
			loginPage.elements.userName().should('not.have.value');
			loginPage.elements.password().should('not.have.value');
			loginPage.clicksubmit();
	        loginPage.elements.mensError().should('be.visible');
			loginPage.elements.mensError().should('contain.text', 'Epic sadface: Username is required');
		});
	});
});

describe ('GX3-6047 SwagLabs | Account | Iniciar sesión y BR de Accesos', () =>{  //Esto no lo sabia si puedes me explicas xfa
	it.only('TC07 Validar No poder acceder a un Enpoind sin estar logeado', () =>{
		cy.visit({url:'https://www.saucedemo.com/inventory.html', failOnStatusCode:false});
		loginPage.elements.labelError().should('contain.text','Epic sadface: You can only access \'/inventory.html\' when you are logged in.');
	});
});
