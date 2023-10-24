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
const shouldByText = (elemento, texto) => {
	cy.get(elemento).should('have.text', texto);
};
const shouldById = (elemento, id) => {
	cy.get(elemento).should('have.id', id);
};
const clickIn = elemento => {
	cy.get(elemento).click();
};

describe('GX-40919 | SwagLabs | SCP | Acceder al Shopping Cart y visualizar contenido', () => {
	beforeEach('PRC:visit login SwagLab y loguearse', () => {
		shoppingCartPage.get.endpoint();
		fillFormAndSubmit(data.username, data.password, data.title);
	});
	it('40920 | TC1: Validar acceder al carrito vacío)', () => {
		shoppingCartPage.clickIconShoppingCart();
		shouldByText(data.element.titleCartEmpty, data.text.titleCartEmpty);
		shouldByText(data.element.quantityColumn, data.text.quantityColumn);
		shouldByText(data.element.descriptionColumn, data.text.descriptionColumn);
		shouldById(data.element.buttonContinueShopping, data.id.continueShopping);
		shouldById(data.element.buttonCheckout, data.id.buttonCheckout);
	});
	it.only('40920 | TC2: Validar acceder al carrito lleno)', () => {
		clickIn(data.element.buttonAddCard);
		shouldByText(data.element.buttonRemove, data.text.buttonRemove);
		clickIn(data.element.shoppingCartLink);
		shouldByText(data.element.inventoryItemName, data.text.inventoryItemName);
		shouldByText(data.element.shoppingcartBadge, data.text.numShoppingcartBadge);
		cy.get('.cart_quantity').should('have.attr', 'class', 'cart_quantity');
		shouldByText(data.element.inventoryItemDesc, data.text.inventoryItemDesc);
		shouldByText(data.element.inventoryItemPrice, data.text.inventoryItemPrice);
	});
});
