import { shoppingCartPage } from '@pages/GX-40919-AccederAlShoppingCartYvisualizarContenido.page';
import data from '@data/GX-40919-AccederAlShoppingCartYvisualizarContenido.json';

const fillFormAndSubmit = (userName, password, valueAssert) => {
	shoppingCartPage.typeUsername(userName);
	shoppingCartPage.get.username().should('have.value', userName);
	shoppingCartPage.typePassword(password);
	shoppingCartPage.get.password().should('have.value', password);
	shoppingCartPage.clickLoginButton();
	if (valueAssert === 'Swag Labs') {
		shoppingCartPage.get.elementInSwaglabs().should('have.text', valueAssert);
	}
};

describe('GX-40919 | SwagLabs | SCP | Acceder al Shopping Cart y visualizar contenido', () => {
	beforeEach('PRC:visit login SwagLab y loguearse', () => {
		cy.visit('https://www.saucedemo.com/');
		fillFormAndSubmit(data.username, data.password, data.title);
	});
	it('40920 | TC1: Validar acceder al carrito vacío)', () => {
		shoppingCartPage.clickIconShoppingCart();
		shoppingCartPage.titleCartEmptyAssert();
		shoppingCartPage.quantityColumnAssert();
		shoppingCartPage.descriptionColumnAssert();
		shoppingCartPage.buttonContinueShoppingAssert();
		shoppingCartPage.buttonCheckoutAssert();
	});
	it('40920 | TC2: Validar acceder al carrito lleno)', () => {
		shoppingCartPage.clickInButtonAddCard();
		shoppingCartPage.buttonRemoveAssert();
		shoppingCartPage.clickInShoppingCartLink();
		shoppingCartPage.inventoryItemNameAssert();
		shoppingCartPage.shoppingcartBadgeAssert();
		shoppingCartPage.cartQuantityAssert();
		shoppingCartPage.inventoryItemDescAssert();
		shoppingCartPage.inventoryItemPriceAssert();
	});
});
