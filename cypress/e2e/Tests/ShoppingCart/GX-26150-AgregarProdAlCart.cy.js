import { homeSagPage } from '@pages/GX-25579-login.Page';
import { shoppingCartPag } from '@pages/GX-26150-shoppingCart.Page';
import values from '@data/GX-25579-Login.json';
const { productDetailsPlp, productDetailsPdp } = Cypress.env();

describe('SwagLabs | SCP | Agregar producto al carrito de compras desde el PLP o PDP', () => {
	beforeEach('Precondición: Usuario debe haber iniciado sesión correctamente y aun no tener  agregado productos en el SC.', () => {
		cy.visit('/');
		cy.url().should('contain', 'saucedemo');
		homeSagPage.typeUsername(values.datosValidos[0].username);
		homeSagPage.typePassword(values.datosValidos[0].password);
		homeSagPage.clickLogin();
		cy.url().should('contain', values.endPoint[0]);
		shoppingCartPag.btnLength().then($btn => {
			Cypress.env('BtnLg', $btn);
		});
		shoppingCartPag.filterBtnPlp('Add to cart').then($btn => {
			expect($btn).to.equal(Cypress.env('BtnLg'));
		});
		shoppingCartPag.elements.shoppingCartBadge().should('not.exist');
	});

	it('26151 | TC1: Validar agregar productos desde el PLP al Shopping-cart exitosamente', () => {
		shoppingCartPag.elements.headerSecondaryTitle().should('have.text', 'Products');
		homeSagPage.elements.itemsContainer().should('be.visible');

		for (let itemsCount = 0; itemsCount < values.itemsProd[1]; itemsCount++) {
			shoppingCartPag.addToCartItemRandomPlp(); // selecionar productos al azar

			//cambio en el valor del boton "Add to cart" a "Remove"

			shoppingCartPag.filterBtnPlp('Remove').then($btn => {
				expect($btn).to.equal(itemsCount + 1);
			});

			if (Cypress.env('BtnLg') - (itemsCount + 1) !== 0) {
				shoppingCartPag.filterBtnPlp('Add to cart').then($btn => {
					expect($btn).to.equal(Cypress.env('BtnLg') - (itemsCount + 1));
				});
			} else {
				cy.log('No existen productos disponibles para agregar al Shopping-cart');
			}

			shoppingCartPag.detailsPlpRem(itemsCount, values.valueClass[0].plp[1]).then(val => {
				expect(val).to.equal(productDetailsPlp.descriptionPlp[itemsCount]);
			});
			shoppingCartPag.detailsPlpRem(itemsCount, values.valueClass[0].plp[2]).then(val => {
				expect(val).to.equal(productDetailsPlp.pricePlp[itemsCount]);
			});

			// incremento en el valor mostrado por el icono del shoppingCart

			shoppingCartPag.elements
				.shoppingCartBadge()
				.should('be.visible')
				.invoke('text')
				.and('contain', itemsCount + 1);

			// productos agregados shoppingCart vs productos seleccionados en el PLP

			shoppingCartPag.gotoShoppingCart();
			cy.url().should('contain', values.endPoint[1]);
			shoppingCartPag.elements.headerSecondaryTitle().should('have.text', 'Your Cart');

			shoppingCartPag.detailsProdCar(itemsCount, values.valueClass[1].cart[0]).then(val => {
				expect(val).to.equal(productDetailsPlp.titlePlp[itemsCount]);
			});
			shoppingCartPag.detailsProdCar(itemsCount, values.valueClass[1].cart[1]).then(val => {
				expect(val).to.equal(productDetailsPlp.descriptionPlp[itemsCount]);
			});
			shoppingCartPag.detailsProdCar(itemsCount, values.valueClass[1].cart[2]).then(val => {
				expect(val).to.equal(productDetailsPlp.pricePlp[itemsCount]);
			});
			shoppingCartPag.backShopping();
		}
	});

	it('26151 | TC2: Validar agregar productos desde el PDP al Shopping-cart exitosamente', () => {
		for (let itemsCount = 0; itemsCount < values.itemsProd[0]; itemsCount++) {
			shoppingCartPag.selectProduct();
			cy.url().should('contain', values.endPoint[5]);
			shoppingCartPag.textBtnPdp().then(val => {
				expect(val).to.equal('Add to cart');
			});
			shoppingCartPag.addToCartPdp();
			shoppingCartPag.textBtnPdp().then(val => {
				expect(val).to.equal('Remove');
			});
			shoppingCartPag.elements
				.shoppingCartBadge()
				.should('be.visible')
				.invoke('text')
				.and('contain', itemsCount + 1);

			shoppingCartPag.gotoShoppingCart();
			cy.url().should('contain', values.endPoint[1]);
			shoppingCartPag.elements.headerSecondaryTitle().should('have.text', 'Your Cart');

			shoppingCartPag.detailsProdCar(itemsCount, values.valueClass[1].cart[0]).then(val => {
				expect(val).to.equal(productDetailsPdp.titlePdp[itemsCount]);
			});
			shoppingCartPag.detailsProdCar(itemsCount, values.valueClass[1].cart[1]).then(val => {
				expect(val).to.equal(productDetailsPdp.descriptionPdp[itemsCount]);
			});
			shoppingCartPag.detailsProdCar(itemsCount, values.valueClass[1].cart[2]).then(val => {
				expect(val).to.equal(productDetailsPdp.pricePdp[itemsCount]);
			});
			shoppingCartPag.backShopping();
		}
	});

	it('26151 | TC3: Validar usar boton "Back to products" durante el proceso de agregar productos desde el PDP al Shopping-cart exitosamente', () => {
		shoppingCartPag.deleteProduct();
		for (let itemsCount = 0; itemsCount < values.itemsProd[0]; itemsCount++) {
			shoppingCartPag.selectProduct();
			cy.url().should('contain', values.endPoint[5]);
			shoppingCartPag.textBtnPdp().then(val => {
				expect(val).to.equal('Add to cart');
			});
			shoppingCartPag.addToCartPdp();
			shoppingCartPag.textBtnPdp().then(val => {
				expect(val).to.equal('Remove');
			});
			shoppingCartPag.elements
				.shoppingCartBadge()
				.should('be.visible')
				.invoke('text')
				.and('contain', itemsCount + 1);
			shoppingCartPag.backToProducts();
			shoppingCartPag.gotoShoppingCart();
			cy.url().should('contain', values.endPoint[1]);
			shoppingCartPag.elements.headerSecondaryTitle().should('have.text', 'Your Cart');

			shoppingCartPag.detailsProdCar(itemsCount, values.valueClass[1].cart[0]).then(val => {
				expect(val).to.equal(productDetailsPdp.titlePdp[itemsCount]);
			});
			shoppingCartPag.detailsProdCar(itemsCount, values.valueClass[1].cart[1]).then(val => {
				expect(val).to.equal(productDetailsPdp.descriptionPdp[itemsCount]);
			});
			shoppingCartPag.detailsProdCar(itemsCount, values.valueClass[1].cart[2]).then(val => {
				expect(val).to.equal(productDetailsPdp.pricePdp[itemsCount]);
			});
			shoppingCartPag.backShopping();
		}
	});
});
