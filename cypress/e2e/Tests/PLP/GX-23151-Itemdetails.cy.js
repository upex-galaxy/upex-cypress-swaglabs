describe('23151 | ✅SwagLabs | PDP | Visualizar Detalles del Item (Producto)', () => 
{
	beforeEach('Usuario debe estar loggeado y situado en el PLP', () => {
		cy.visit('https://www.saucedemo.com/');
		cy.fixture('data/GX-23151-Itemdetails.json').then((the) => {
			productDetails.enterUsername(the.data.username.valid);
			productDetails.enterPassword(the.data.password.valid);
			productDetails.get.loginBtn().click();
		})
	})
	it('23152 | TC1: Validar que al seleccionar cualquier producto haciendo click en el nombre, se visualice la etiqueta con nombre del producto, la descripción del producto, la imagen del producto, el precio del producto, el Botón Back to Products,  el Botón  Add to Cart.', () => {
		productDetails.get.productText().click();
		productDetails.get.detailsName().should('exist').should('be.visible');
		productDetails.get.detailsDescription().should('exist').should('be.visible');
		productDetails.get.detailsPrice().should('exist').should('be.visible');
		productDetails.get.detailsBtn().should('exist').should('be.visible');
		productDetails.get.detailsBackBtn().should('exist').should('be.visible');
		productDetails.get.detailsImage().should('exist').should('be.visible');
	})
	it('23152 | TC2: Validar que al seleccionar cualquier producto haciendo click en la imagen, se visualice la etiqueta con nombre del producto, la descripción del producto, la imagen del producto, el precio del producto, el Botón Back to Products y el Botón  Add to Cart.', () => {
		productDetails.get.productImage().click();
		productDetails.get.detailsName().should('exist').should('be.visible');
		productDetails.get.detailsDescription().should('exist').should('be.visible');
		productDetails.get.detailsPrice().should('exist').should('be.visible');
		productDetails.get.detailsBtn().should('exist').should('be.visible').should('have.text', 'Add to cart');
		productDetails.get.detailsBackBtn().should('exist').should('be.visible');
		productDetails.get.detailsImage().should('exist').should('be.visible');
	})
	it('23152 | TC3: Validar que al estar en el SCP, y seleccionar un producto que haya sido añadido se visualice la etiqueta con nombre del producto, la descripción del producto, la imagen del producto, el precio del producto, el Botón Back to Products y el Botón Remove.', () => {
		productDetails.get.addtocartPlpBtn().click();
		productDetails.get.shoppingCartBtn().click();
		productDetails.get.firstItemSCP().click();
		productDetails.get.detailsBtn().should('exist').should('be.visible').should('have.text', 'Remove');
		productDetails.get.detailsBackBtn().should('exist').should('be.visible');
	})
})
import { productDetails } from "@pages/GX-22334-productDetails.Page";
import { removeLogs } from '@helper/RemoveLogs';
removeLogs();