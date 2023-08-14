import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
import data from '../../../fixtures/data/GX-27380-Checkout.json';
import { login, addproduct, finalpurchase } from '../../../support/pages/GX-27380-Checkout.Page';

const LoginAccount = (userName, password) => {
	login.enterUsername(userName);
	login.get.userNameInput().should('have.value', userName);
	login.enterPassword(password);
	login.get.passwordInput().should('have.value', password);
	login.buttonLogin();
};
const AddproductInTheCart = () => {
	addproduct.buttonAdd();
	addproduct.bttnShoppingCart();
	addproduct.bttnCheckout();
};
const CompleteForm = () => {
	finalpurchase.firstNameField(data.FormularioDeDatos.firstName);
	finalpurchase.get.firstNameInput().should('have.value', data.FormularioDeDatos.firstName);
	finalpurchase.lastNameField(data.FormularioDeDatos.lastName);
	finalpurchase.get.lastNameInput().should('have.value', data.FormularioDeDatos.lastName);
	finalpurchase.postalCodeField(data.FormularioDeDatos.postalCode);
	finalpurchase.get.postalCodeInput().should('have.value', data.FormularioDeDatos.postalCode);
	finalpurchase.bttnContinue();
};
const PurchaseInformation = () => {
	finalpurchase.payment(data.ValidacionFinal.dataPayment);
	finalpurchase.get.paymentInfo().should('contain.text', data.ValidacionFinal.dataPayment);
	finalpurchase.shipping(data.ValidacionFinal.dataShipping);
	finalpurchase.get.shippingInfo().should('contain.text', data.ValidacionFinal.dataShipping);
	finalpurchase.price(data.ValidacionFinal.dataPriceTotal);
	finalpurchase.get.priceTotal().should('contain.text', data.ValidacionFinal.dataPriceTotal);
	finalpurchase.resultTotal(data.ValidacionFinal.dataTotal);
	finalpurchase.get.total().should('contain.text', data.ValidacionFinal.dataTotal );
};
const PurchaseOk = () => {
	finalpurchase.bttnFinish();
	finalpurchase.resultOk(data.ValidacionFinal.buyOk);
	finalpurchase.get.messageOk().should('contain.text', data.ValidacionFinal.buyOk);
};

describe('✅SwagLabs | Checkout | Visualizar el Resumen de Compra del Shopping Cart', () => {
	beforeEach('visitar la página de SwagLabs', () => {
		cy.visit('/');
		cy.url().should('include', data.swagLabs);
	});
	it('27381| TC1: Validar que se pueda iniciar sesión con las credenciales correctas al hacer click en el botón “Login“.', () => {
		LoginAccount(data.userName, data.password);
	});
	it('27381| TC2: Validar poder agregar al menos un producto al "shopping-cart" y visualizarlo en el mismo', () => {
		LoginAccount(data.userName, data.password);
		AddproductInTheCart();
	});
	it('27381| TC3: Validar poder completar el formulario "Checkout: Your Information" con los datos correspondientes.', () => {
		LoginAccount(data.userName, data.password);
		AddproductInTheCart();
		CompleteForm();
	});
	it('27381| TC4: Validar poder visualizar la informacion de pago de los productos seleccionados.', () => {
		LoginAccount(data.userName, data.password);
		AddproductInTheCart();
		CompleteForm();
		PurchaseInformation();
	});
	it('27381| TC5: Validar poder visualizar la finalizacion de la compra con exito, arrojando el mensaje "Thank you for your order!".', () => {
		LoginAccount(data.userName, data.password);
		AddproductInTheCart();
		CompleteForm();
		PurchaseInformation();
		PurchaseOk();
	});
});