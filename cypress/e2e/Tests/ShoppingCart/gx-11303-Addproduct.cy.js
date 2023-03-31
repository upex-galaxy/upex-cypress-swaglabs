import { login as Login } from '@pages/Login.Page';
import { cart as ShoppingCart } from '@pages/ShopingCart.Page';
import { productDetailPage } from '@pages/ProductDetailPage.Page';
const { login, endpoint } = Cypress.env('swagLabs');
import { ProductListpage, nameItem, priceItem } from '@pages/ProductList.Page';
const base = Cypress.env('baseUrl');

describe('GX-11303', () => {
	beforeEach('Precondicion para estar en el PLP', () => {
		cy.visit(base);
		Login.enterUsername(login.users.correctUser);
		Login.enterPassword(login.users.correctPass);
		Login.submitLogin();
		cy.url().should('contain', endpoint.inventory);
	});
	it('TC1: Agregar al carrito dos items random y verificar que el boton (Add to cart) Cambien a (Remove)', () => {
		ProductListpage.AddtoCartItemRandom(); //first Item
		ProductListpage.AddtoCartItemRandom(); //Second item
		ProductListpage.get.Removeofcart().should('be.visible').its('length').and('eq', 2); //Validate that (exist, visible) 2 button remove
	});
	it('TC2: Agregar al carrito dos items random y verificar que el icono (Cart) sume dos items (2)', () => {
		ProductListpage.AddtoCartItemRandom(); //first Item
		ProductListpage.AddtoCartItemRandom(); //second item
		ProductListpage.get.cart().contains('2');
	});
	it('TC3: Validar que (Name y Price) es el mismo del item agregado en la seccion Cart', () => {
		ProductListpage.GetRandomItem();
		ProductListpage.GetName();
		ProductListpage.GetPrice();
		ProductListpage.addtoCartItemRandom();
		ProductListpage.GotoShopingCart();
		ShoppingCart.get.Productname().should('contain', nameItem);
		ShoppingCart.get.Productprice().should('contain', priceItem);
	});
	it('TC4: Validar agregar item desde el PDP y que sume 1+ en el icono (Cart)', function () {
		ProductListpage.SelectrandomItem();
		productDetailPage.AddItemToCart();
		productDetailPage.get.cart().contains(1);
	});
});
//h
