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
		shoppingCartPage.get.titleCartEmpty().should('have.text', data.text.titleCartEmpty);
		shoppingCartPage.get.quantityColumn().should('have.text', data.text.quantityColumn);
		shoppingCartPage.get.descriptionColumn().should('have.text', data.text.descriptionColumn);
		shoppingCartPage.get.buttonContinueShopping().should('have.id', 'continue-shopping');
		shoppingCartPage.get.buttonCheckout().should('have.id', 'checkout');
	});
	it('40920 | TC2: Validar acceder al carrito lleno)', () => {
		shoppingCartPage.clickInButtonAddCard();
		shoppingCartPage.buttonRemoveAssert();
		shoppingCartPage.clickInShoppingCartLink();
		shoppingCartPage.get.inventoryItemName().should('have.text', data.text.inventoryItemName);
		shoppingCartPage.get.shoppingcartBadge().should('have.text', data.text.numShoppingcartBadge);
		shoppingCartPage.get.cartQuantity().should('have.attr', 'class', 'cart_quantity');
		shoppingCartPage.get.inventoryItemDesc().should('have.text', data.text.inventoryItemDesc);
		shoppingCartPage.get.inventoryItemPrice().should('have.text', data.text.inventoryItemPrice);
	});
});
