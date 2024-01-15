const { login } = require('@pages/GX3-775-loginPage');
const { pListPage } = require('@pages/GX3-775-plp');
const { sCartPage } = require('@pages/GX3-775-scp');
const { pdpPage } = require('@pages/GX3-775-pdp');

const data = Cypress.env('swagLabs');
const base = Cypress.env('baseUrl');
import { removeLogs } from '@helper/RemoveLogs';
removeLogs();

describe('GX3-775 SwagLabs | SCP | Agregar producto al carrito de compras desde el PLP o PDP', () => {
	beforeEach(() => {
		cy.visit(base);
		login.enterUsername(data.login.users.correctUser);
		login.enterPassword(data.login.users.correctPass);
		login.submitLogin();
	});

	it('GX3-775 | TC1: Validar añadir un producto del PLP al Shopping cart exitosamente', () => {
		cy.url().should('contain', data.endpoint.inventory);
		pListPage.getRandomProduct();
		pListPage.get.removeBtn().should('have.text', 'Remove');
		pListPage.get.shoppingCartIcon().should('contain', '1');
		pListPage.clickShoppingCart();
		sCartPage.get
			.scpTitle()
			.invoke('text')
			.then(titulo => {
				expect(titulo).to.equal(pListPage.itemTitle);
			});
		sCartPage.get
			.scpDesc()
			.invoke('text')
			.then(desc => {
				expect(desc).to.equal(pListPage.itemDesc);
			});
		sCartPage.get
			.scpPrice()
			.invoke('text')
			.then(price => {
				expect(price).to.equal(pListPage.itemPrice);
			});
	});

	it('GX3-775 | TC2: Validar añadir un producto desde el PDP al SCP exitosamente', () => {
		pdpPage.getPdpProduct();
		cy.url().should('contain', data.endpoint.product);

		pdpPage.clickBtn();
		pdpPage.get.removeBtn().should('have.text', 'Remove');
		pdpPage.get.shoppingCartIcon().should('contain', '1');
		pdpPage.clickShoppingCart();
		sCartPage.get
			.scpTitle()
			.invoke('text')
			.then(titulo => {
				expect(titulo).to.equal(pdpPage.itemTitle);
			});
		sCartPage.get
			.scpDesc()
			.invoke('text')
			.then(desc => {
				expect(desc).to.equal(pdpPage.itemDesc);
			});
		sCartPage.get
			.scpPrice()
			.invoke('text')
			.then(price => {
				expect(price).to.equal(pdpPage.itemPrice);
			});
	});
});
