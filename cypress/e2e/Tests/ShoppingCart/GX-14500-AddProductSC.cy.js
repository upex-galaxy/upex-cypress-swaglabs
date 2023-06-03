import { loginExample } from '@pages/Login.Page';
import { cartPage } from '@pages/SCP.Page';
import { plp } from '@pages/PLP.Page';
import { header } from '@pages/swagLabsHeader.Page';

const { baseUrl } = Cypress.env();
const randomElement = elementQ => Math.floor(Math.random() * elementQ);

describe('US GX-14500- | TS: ✅SwagLabs | SCP | Agregar producto al carrito de compras desde el PLP o PDP', () => {
	before('', () => {
		cy.fixture('SCP/data').then(datos => {
			data = datos;
		});
	});

	beforeEach('User logged in', () => {
		cy.visit(baseUrl);
		loginExample.enterUsername(data.user);
		loginExample.enterPassword(data.password);
		loginExample.submitLogin();
		cy.url().should('contain', '/inventory.html');
	});

	it('14501 | TC1: Add a product from the PLP to the Shopping-Cart successfully', () => {
		plp.get.productList().then(elements => {
			const cantidad = elements.length;
			const randomIndex = randomElement(cantidad);
			let itemPrice;
			let itemName;
			let itemDesc;
			cy.wrap(elements)
				.eq(randomIndex)
				.within(() => {
					cy.get('button').click();
					plp.get.productPrice().then(elementPrice => {
						itemPrice = elementPrice.text();
					});
					plp.get.productName().then(elementName => {
						itemName = elementName.text();
					});
					plp.get.productDesc().then(elementDesc => {
						itemDesc = elementDesc.text();
					});
				});

			//Validate button text from 'Add to cart' to 'Remove'
			plp.get.itemButton().eq(randomIndex).should('have.text', 'Remove');

			//Validate cart quantity
			header.get.cartQuantity().should('have.text', '1');

			header.get.iconSC().click();
			cy.url().should('contain', 'cart.html');

			cartPage.get.title().should('have.text', 'Your Cart');

			//Validate product characteristics
			cartPage.get.productPrice().then(actualPrice => {
				const addedPrice = actualPrice.text();
				expect(addedPrice).equal(itemPrice);
			});
			cartPage.get.productName().then(actualName => {
				const addedName = actualName.text();
				expect(addedName).equal(itemName);
			});
			cartPage.get.productDescription().then(actualDesc => {
				const addedDesc = actualDesc.text();
				expect(addedDesc).equal(itemDesc);
			});
		});
	});

	it('14501 | TC2: Successfully adding multiple products from the PLP to the Shopping-Cart', () => {
		plp.get.productList().then(elements => {
			for (let index = 0; index < elements.length; index++) {
				cy.addFromPLP(index);

				//Validate button text from 'Add to cart' to 'Remove'
				plp.get.itemButton().eq(index).should('have.text', 'Remove');

				//Validate cart quantity
				header.get.cartQuantity().should('have.text', index + 1);

				header.get.iconSC().click();
				cy.url().should('contain', 'cart.html');

				cartPage.get.title().should('have.text', 'Your Cart');

				//Validate product characteristics
				cartPage.get.productPrice().then(actualPrice => {
					const addedPrice = actualPrice.eq(index).text();
					expect(addedPrice).equal(Cypress.env('itemPrice'));
				});
				cartPage.get.productName().then(actualName => {
					const addedName = actualName.eq(index).text();
					expect(addedName).equal(Cypress.env('itemName'));
				});
				cartPage.get.productDescription().then(actualDesc => {
					const addedDesc = actualDesc.eq(index).text();
					expect(addedDesc).equal(Cypress.env('itemDesc'));
				});

				cartPage.continueShoppingClick();
			}
		});
	});

	it('14501 | TC3:  Add a product from the PDP to the Shopping-Cart successfully', () => {
		//inventory-item
		//Back to products
	});

	it('14501 | TC4: Successfully adding multiple products from the PDP to the Shopping-Cart', () => {});
});
