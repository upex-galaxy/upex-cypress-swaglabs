import { formCheck } from '@pages/formCheckoutLCasco.Page';
import formCheckOut from '@data/checkoutStep2Form';

describe('SwagLabs | Checkout Info | Insertar información del comprador.', () => {
	beforeEach('login Swag Labs, añadir productos y situar en seccion card', () => {
		cy.loginSuccess();
		//hacer un for para agregar 2 productos al carrito , y
		// se puede con un Each pero hay que determinar cuales son los index 2 numeros random que no se repitan

		//Agregar producto al carrito
		cy.addToCardOneRandomItem();

		formCheck.gotoShoppingCart();

		formCheck.gotoCheckoutForm();
	});

	//agregar producto aleatorio al carrito

	it('GX-10740|TC01 validar que el usuario ingresa exitosamente a la sección checkout-step-two', () => {
		formCheck.typeName(formCheckOut.firstName);
		formCheck.typeLastName(formCheckOut.lastName);
		formCheck.typeCP(formCheckOut.zipCode);
		formCheck.ClickBtnContinuo();
		cy.url().should('contain', 'checkout-step-two');
	});

	it('GX-10740|TC02 validar first firstName null en formulario chechout', () => {
		formCheck.typeLastName(formCheckOut.lastName);
		formCheck.typeCP(formCheckOut.zipCode);
		formCheck.ClickBtnContinuo();
		cy.get('[data-test="error"]').should('contain', 'Error: First Name is required');
	});

	it('GX-10740|TC03 validar last firstName null en formulario chechout', () => {
		formCheck.typeName(formCheckOut.firstName);
		formCheck.typeCP(formCheckOut.zipCode);
		formCheck.ClickBtnContinuo();
		cy.get('[data-test="error"]').should('contain', 'Error: Last Name is required');
	});

	it.skip('GX-10740|TC04 validar caracteres especiales en formulario checkout', () => {
		cy.get('[data-test="firstName"]').type('%%');
		cy.get('[data-test="lastName"]').type('$$');
		cy.get('[data-test="postalCode"]').type('··%');
		cy.get('[data-test="error"]').should('contain', 'First_Name inválido');
	});

	it.skip('GX-10740|TC05 validar mensajes ingreso de caracteres numericos en campos first y last firstName del formulario checkout', () => {
		cy.get('[data-test="lastName"]').type(1);
		cy.get('[data-test="postalCode"]').type(2);
		cy.get('[data-test="error"]').should('contain', 'Last_Name inválido');
	});

	it('GX-10740|TC06 validar regreso a seccion cart al hacer click en boton cancel del formulario chechout', () => {
		formCheck.typeName(formCheckOut.firstName);
		formCheck.typeCP(formCheckOut.zipCode);
		formCheck.ClickBtnContinuo();
		cy.get('[data-test="cancel"]').click();
		cy.url().should('contain', 'cart');
	});
});
