import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
import data from '../../../fixtures/data/GX-27380-Checkout.json';
import { login, addproduct, finalpurchase } from '../../../support/pages/GX-27380-Checkout.Page';

removeLogs();

describe('✅SwagLabs | Checkout | Visualizar el Resumen de Compra del Shopping Cart', () => {
	beforeEach('visitar la página de SwagLabs', () => {
		cy.visit('/');
		cy.url().should('include', data.swagLabs);
	});

	it('27381| TC1: Validar que se pueda iniciar sesión con las credenciales correctas al hacer click en el botón “Login“.', () => {
		login.enterUsername(data.userName);
		login.get.userNameInput().should('have.value', data.userName);
		login.enterPassword(data.password);
		login.get.passwordInput().should('have.value', data.password);
		login.buttonLogin();
		
	});
	it('27381| TC2: Validar poder agregar al menos un producto al "shopping-cart", visualizarlo en el mismo y avanzar hacia el "Checkout: Your Information", haciendo click en el boton "Checkout".', () => {
		login.enterUsername(data.userName);
		login.get.userNameInput().should('have.value', data.userName);
		login.enterPassword(data.password);
		login.get.passwordInput().should('have.value', data.password);
		login.buttonLogin();
		addproduct.buttonAdd();
		addproduct.bttnShoppingCart();
		addproduct.bttnCheckout();
	});
	it('27381| TC3: Validar poder completar el formulario "Checkout: Your Information" con los datos correspondientes y avanzar hacia el "Checkout: Overview" al hacer click en el boton "continue".', () => {
		login.enterUsername(data.userName);
		login.get.userNameInput().should('have.value', data.userName);
		login.enterPassword(data.password);
		login.get.passwordInput().should('have.value', data.password);
		login.buttonLogin();
		addproduct.buttonAdd();
		addproduct.bttnShoppingCart();
		addproduct.bttnCheckout();
		finalpurchase.firstNameField(data.FormularioDeDatos.firstName);
		finalpurchase.get.firstNameInput().should('have.value', data.FormularioDeDatos.firstName);
		finalpurchase.lastNameField(data.FormularioDeDatos.lastName);
		finalpurchase.get.lastNameInput().should('have.value', data.FormularioDeDatos.lastName);
		finalpurchase.postalCodeField(data.FormularioDeDatos.postalCode);
		finalpurchase.get.postalCodeInput().should('have.value', data.FormularioDeDatos.postalCode);
		finalpurchase.bttnContinue();
	});
	it('27381| TC4: Validar poder visualizar la informacion de pago, envio, la sumatoria de los precios de los productos seleccionados sin tax, tax asociado a la compra y la sumatoria total de los productos seleccionados.', () => {
		login.enterUsername(data.userName);
		login.get.userNameInput().should('have.value', data.userName);
		login.enterPassword(data.password);
		login.get.passwordInput().should('have.value', data.password);
		login.buttonLogin();
		addproduct.buttonAdd();
		addproduct.bttnShoppingCart();
		addproduct.bttnCheckout();
		finalpurchase.firstNameField(data.FormularioDeDatos.firstName);
		finalpurchase.get.firstNameInput().should('have.value', data.FormularioDeDatos.firstName);
		finalpurchase.lastNameField(data.FormularioDeDatos.lastName);
		finalpurchase.get.lastNameInput().should('have.value', data.FormularioDeDatos.lastName);
		finalpurchase.postalCodeField(data.FormularioDeDatos.postalCode);
		finalpurchase.get.postalCodeInput().should('have.value', data.FormularioDeDatos.postalCode);
		finalpurchase.bttnContinue();
		finalpurchase.payment(data.ValidacionFinal.dataPayment);
		finalpurchase.get.paymentInfo().should('contain.text', data.ValidacionFinal.dataPayment);
		finalpurchase.shipping(data.ValidacionFinal.dataShipping);
		finalpurchase.get.shippingInfo().should('contain.text', data.ValidacionFinal.dataShipping);
		finalpurchase.price(data.ValidacionFinal.dataPriceTotal);
		finalpurchase.get.priceTotal().should('contain.text', data.ValidacionFinal.dataPriceTotal);
		finalpurchase.resultTotal(data.ValidacionFinal.dataTotal);
		finalpurchase.get.total().should('contain.text', data.ValidacionFinal.dataTotal );
	});
	it.only('27381| TC5: Validar poder visualizar la finalizacion de la compra con exito al hacer click en el boton "finish" arrojando el mensaje "Thank you for your order!".', () => {
		login.enterUsername(data.userName);
		login.get.userNameInput().should('have.value', data.userName);
		login.enterPassword(data.password);
		login.get.passwordInput().should('have.value', data.password);
		login.buttonLogin();
		addproduct.buttonAdd();
		addproduct.bttnShoppingCart();
		addproduct.bttnCheckout();
		finalpurchase.firstNameField(data.FormularioDeDatos.firstName);
		finalpurchase.get.firstNameInput().should('have.value', data.FormularioDeDatos.firstName);
		finalpurchase.lastNameField(data.FormularioDeDatos.lastName);
		finalpurchase.get.lastNameInput().should('have.value', data.FormularioDeDatos.lastName);
		finalpurchase.postalCodeField(data.FormularioDeDatos.postalCode);
		finalpurchase.get.postalCodeInput().should('have.value', data.FormularioDeDatos.postalCode);
		finalpurchase.bttnContinue();
		finalpurchase.payment(data.ValidacionFinal.dataPayment);
		finalpurchase.get.paymentInfo().should('contain.text', data.ValidacionFinal.dataPayment);
		finalpurchase.shipping(data.ValidacionFinal.dataShipping);
		finalpurchase.get.shippingInfo().should('contain.text', data.ValidacionFinal.dataShipping);
		finalpurchase.price(data.ValidacionFinal.dataPriceTotal);
		finalpurchase.get.priceTotal().should('contain.text', data.ValidacionFinal.dataPriceTotal);
		finalpurchase.resultTotal(data.ValidacionFinal.dataTotal);
		finalpurchase.get.total().should('contain.text', data.ValidacionFinal.dataTotal);
		finalpurchase.bttnFinish();
		finalpurchase.resultOk(data.ValidacionFinal.buyOk);
		finalpurchase.get.messageOk().should('contain.text', data.ValidacionFinal.buyOk);

	});
});