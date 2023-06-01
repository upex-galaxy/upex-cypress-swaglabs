import { loginExample } from '@pages/Login.Page';
import { cartPage } from '@pages/SCP.Page';
import { plp } from '@pages/PLP.Page';
import { header } from '@pages/swagLabsHeader.Page';

const url = Cypress.env('baseUrl');
const filePath = 'cypress/fixtures/SCP/products.json';

describe('US GX-14500- | TS: ✅SwagLabs | SCP | Agregar producto al carrito de compras desde el PLP o PDP', () => {
	before('', () => {
		cy.fixture('SCP/data').then(datos => {
			data = datos;
		}); 
	});

	beforeEach('User logged in', () => {
		cy.visit(url);
		loginExample.enterUsername(data.user);
		loginExample.enterPassword(data.password);
		loginExample.submitLogin();
		cy.url().should('contain', '/inventory.html');
	});

	it.only('14501 | TC1: Add a product from the PLP to the Shopping-Cart successfully', () => {
		//let prodData;
		let productData;
		let producto;
		//cartPage.checkTitle().should('have.text', 'Your Cart');
		//cartPage.removeAllProducts();

		let itemRandom = [];
        

		plp.get.productList().then(num => {
            cy.log("aleatorio")
            cy.log(Cypress._.sample(num));
			let item = Math.floor(Math.random() * num.length);

			//extract product name
			plp.get
				.productName()
				.eq(item)
				.then(text1 => {
					itemRandom.push(text1.text());
				});

			//extract product price

			plp.get
				.productPrice()
				.eq(item)
				.then(text2 => {
					itemRandom.push(text2.text());
				});

			//extract product description
			plp.get
				.productDesc()
				.eq(item)
				.then(text3 => {
					itemRandom.push(text3.text());

					productData = {
						index: item,
						nombre: itemRandom[0],
						price: itemRandom[1],
						desc: itemRandom[2],
					};

					cy.log(productData.nombre);
					//array.push(productData);
					cy.readFile(filePath).then(array => {
						array.push(productData);
						cy.writeFile(filePath, array);
						//quantity = array.length;
					});
					//cy.writeFile(filePath, productData);
				});

			//agregar al carrito
			plp.get.addToCart().eq(item).click();

			cy.fixture('SCP/products').then(prod => {
				cy.log(prod);
				producto = prod.length;
				cy.log('al agregar' + producto);
				header.get.cartQuantity().should('have.text', producto);
			});

			//validate button string: 'Add to cart' to 'Remove'
			plp.checkItemButton().eq(item).should('have.text', 'Remove');

			//validate cart quantity
		});

		//fin command

		//cy.get('.inventory_item_name').first();
		//plp.productName().should('contains', 'Sauce');
		//let a = plp.returnItemName();
		header.goToSCP();
		//cy.get('.inventory_item_name').should('have.text', item);
		// cartPage.checkProductName().should('have.text', name);
		cartPage.checkTitle().should('have.text', 'Your Cart');

		//Check the characteristics of the product added to the basket
	});

	it('14501 | TC2: Successfully adding multiple products from the PLP to the Shopping-Cart', () => {});

	it('14501 | TC3:  Add a product from the PDP to the Shopping-Cart successfully', () => {
		//inventory-item
		//Back to products
	});

	it('14501 | TC4: Successfully adding multiple products from the PDP to the Shopping-Cart', () => {});

	afterEach('Limpiar', () => {
		const array = [];
		cy.writeFile(filePath, array);
		//cy.log("finaal" + producto);
	});

	//________________________________________________________________________
	// Comando predeterminado para que no ocurran errores de excepciones:
	Cypress.on('uncaught:exception', (err, runnable) => {
		// returning false here prevents Cypress from
		// failing the test
		return false;
	});
	// Comando predeterminado para que no aparezcan los Fetch en el log del Test Runner:
	const origLog = Cypress.log;
	Cypress.log = function (opts, ...other) {
		if (opts.displayName === 'xhr' || (opts.displayName === 'fetch' && opts.url.startsWith('https://'))) {
			return;
		}
		return origLog(opts, ...other);
	};
});