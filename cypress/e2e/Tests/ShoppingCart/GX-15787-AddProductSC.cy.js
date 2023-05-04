
/// <reference types="cypress"/>

import { LoginPage } from '@pages/LoginPage';
import { ProductPage } from '@pages/ProductPage';
import { ShoppingCartPage } from '@pages/ShoppingCartPage';
import { ProductDetailPage } from '@pages/ProductDetailPage';
const inventoryHtml = Cypress.env('swagLabs');
const base = Cypress.env('baseUrl')


describe('US GX-15787 | TS: ✅SwagLabs | SCP | Agregar producto al carrito de compras desde el PLP o PDP', () => {

	let data;
  const loginPage = new LoginPage;
  const productPage = new ProductPage;
  const shoppingCartPage = new ShoppingCartPage;
  const productDetailPage = new ProductDetailPage;

	before('before', ()=>{    
		// Datos del fixture
		cy.fixture('DOM/space/dataSawgLabs').then(datos => {
			data = datos;
		});
  });

	beforeEach('User log in Swag Labs Website', () => {       
		cy.visit(base);
		loginPage.fillUsernameField(data.data.user);
		loginPage.fillPasswordField(data.data.password);
		loginPage.ClickLoginButton();
		loginPage.CheckNoProductAdded();
    
  });
  
  it('15787 | TC1: Add a product from the PLP to the Shopping-Cart successfully', () => {
        cy.url().should('include', inventoryHtml.endpoint.inventory);
		productPage.ClickAddToCartButton();
	    shoppingCartPage.ClickLinkShoppingCart();
		shoppingCartPage.CheckCartItem();
		shoppingCartPage.CheckRemoveButton();
		shoppingCartPage.CheckAddItemSC();
		shoppingCartPage.CheckInventoryName().should('contain', data.product.name);
		shoppingCartPage.CheckInventoryItemDesc().should('have.text', data.product.inventoryItemDescription);
		shoppingCartPage.CheckInventoryItemPrice().should('have.text', '$' + data.product.inventoryItemPrice);
  });
  
  it('15787 | TC1: Add a product from the PDP to the Shopping-Cart successfully', () => {
      productPage.ClickLinkProduct();
      cy.url().should('contain', inventoryHtml.endpoint.product);    
      productDetailPage.ClickAddToCartButton();
      shoppingCartPage.ClickLinkShoppingCart();
	  shoppingCartPage.CheckCartItem();
	  shoppingCartPage.CheckRemoveButton();
	  shoppingCartPage.CheckAddItemSC();
	  shoppingCartPage.CheckInventoryName().should('contain', data.product.name);
	  shoppingCartPage.CheckInventoryItemDesc().should('have.text', data.product.inventoryItemDescription);
	  shoppingCartPage.CheckInventoryItemPrice().should('have.text', '$' + data.product.inventoryItemPrice);
  });

});