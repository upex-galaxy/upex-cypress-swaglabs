import { login } from '../../../support/pages/GX-38224-Checkout/GX-38224-Login';
import { plp } from '@pages/GX-38224-Checkout/GX-38224-Plp';
import { checkout } from '@pages/GX-38224-Checkout/GX-38224-Checkout';

import { faker } from '@faker-js/faker';

describe('GX-38224-SwagLabs | Checkout | Finalizar o Cancelar la compra de un producto en la Website', () => {
	beforeEach(() => {
		cy.visit('/');
		login.login();
	});
	it('38225 | TC1: Validar finalizar compra del producto', () => {
		const firstName = faker.name.firstName();
		const lastName = faker.name.lastName();
		const postalCode = faker.address.zipCode();

		plp.randomCard().then(index => {
			const [title, desc, price, random] = index;
			plp.get.cartIcon().should('have.text', '1');
			plp.get.cardBtn().eq(random).should('have.text', 'Remove');
			plp.cartClick();
			checkout.get.title().should('have.text', title);
			checkout.get.desc().should('have.text', desc);
			checkout.get.price().should('have.text', price);
			plp.cartClick();
			checkout.clickCheckoutBtn();

			checkout.fillInfo({
				firstName: firstName,
				lastName: lastName,
				postalCode: postalCode,
			});
			checkout.get.title().should('have.text', title);
			checkout.get.desc().should('have.text', desc);
			checkout.get.price().should('have.text', price);
		});
		checkout.clickFinishBtn();
		checkout.get.header().should('have.text', 'Thank you for your order!');
		checkout.get.text().should('have.text', 'Your order has been dispatched, and will arrive just as fast as the pony can get there!');
	});

	it('38225 | TC2: Validar cancelar compra del producto', () => {
		plp.randomCard().then(index => {
			const [title, desc, price, random] = index;
			plp.get.cartIcon().should('have.text', '1');
			plp.get.cardBtn().eq(random).should('have.text', 'Remove');
			plp.cartClick();
			checkout.get.title().should('have.text', title);
			checkout.get.desc().should('have.text', desc);
			checkout.get.price().should('have.text', price);
			plp.cartClick();
		});
		checkout.clickRemoveBtn();
		checkout.clickContinueShoppingBtn();
		plp.get.cardContainer().should('have.class', 'inventory_item');
		cy.url().should('include', 'inventory.html');
	});
});
