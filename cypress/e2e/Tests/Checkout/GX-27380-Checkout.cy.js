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
const ValidationEndpointInventory = () => {
	login.get.nameProductValidation().should('contain.text', data.FinishValidation.backPack);
};
const AddproductInTheCart = () => {
	addproduct.buttonAdd();
	addproduct.bttnShoppingCart();
	addproduct.bttnCheckout();
	

};
const ValidationAddProduct = () => {
	addproduct.get.cartContainer().should('be.visible', 'shopping_cart_badge');
};
const CompleteForm = () => {
	finalpurchase.firstNameField(data.dataForm.firstName);
	finalpurchase.get.firstNameInput().should('have.value', data.dataForm.firstName);
	finalpurchase.lastNameField(data.dataForm.lastName);
	finalpurchase.get.lastNameInput().should('have.value', data.dataForm.lastName);
	finalpurchase.postalCodeField(data.dataForm.postalCode);
	finalpurchase.get.postalCodeInput().should('have.value', data.dataForm.postalCode);
	finalpurchase.bttnContinue();
};
const PurchaseInformation = () => {
	finalpurchase.payment(data.FinishValidation.dataPayment);
	finalpurchase.get.paymentInfo().should('contain.text', data.FinishValidation.dataPayment);
	finalpurchase.shipping(data.FinishValidation.dataShipping);
	finalpurchase.get.shippingInfo().should('contain.text', data.FinishValidation.dataShipping);
	finalpurchase.price(data.FinishValidation.dataPriceTotal);
	finalpurchase.get.priceTotal().should('contain.text', data.FinishValidation.dataPriceTotal);
	finalpurchase.resultTotal(data.FinishValidation.dataTotal);
	finalpurchase.get.total().should('contain.text', data.FinishValidation.dataTotal );
};
const PurchaseOk = () => {
	finalpurchase.bttnFinish();
	finalpurchase.resultOk(data.FinishValidation.successfulPurchase);
	finalpurchase.get.messageOk().should('contain.text', data.FinishValidation.successfulPurchase);
};
describe('✅SwagLabs | Checkout | Visualizar el Resumen de Compra del Shopping Cart', () => {
	beforeEach('visitar la página de SwagLabs y loguearse con las credenciales correctas', () => {
		cy.visit('/');
		cy.url().should('include', data.swagLabs);
		LoginAccount(data.userName, data.password);
	});
	it('27381| TC1: Validar que se pueda iniciar sesión con las credenciales correctas al hacer click en el botón “Login“.', () => {
		ValidationEndpointInventory();
	});
	it('27381| TC2: Validar poder agregar al menos un producto al "shopping-cart" y visualizarlo en el mismo', () => {
		ValidationEndpointInventory();
		AddproductInTheCart();
		ValidationAddProduct();
		
	});
	it('27381| TC3: Validar poder completar el formulario "Checkout: Your Information" con los datos correspondientes.', () => {
		ValidationEndpointInventory();
		AddproductInTheCart();
		ValidationAddProduct();
		CompleteForm();
	});
	it('27381| TC4: Validar poder visualizar la informacion de pago de los productos seleccionados.', () => {
		ValidationEndpointInventory();
		AddproductInTheCart();
		ValidationAddProduct();
		CompleteForm();
		PurchaseInformation();
	});
	it('27381| TC5: Validar poder visualizar la finalizacion de la compra con exito, arrojando el mensaje "Thank you for your order!".', () => {
		ValidationEndpointInventory();
		AddproductInTheCart();
		ValidationAddProduct();
		CompleteForm();
		PurchaseInformation();
		PurchaseOk();
	});
});