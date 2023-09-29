import { login } from '@pages/GX-34846-agregarProductosAlCart/GX-34846-Login';
import { plp } from '@pages/GX-34846-agregarProductosAlCart/GX-34846-PLP';
import { pdp } from '@pages/GX-34846-agregarProductosAlCart/GX-34846-PDP';
import { shoppingCart } from '@pages/GX-34846-agregarProductosAlCart/GX-34846-ShoppingCart';

import { removeLogs } from '@helper/RemoveLogs';

describe('GX-34846-SwagLabs | SCP | Agregar producto al carrito de compras desde el PLP o PDP', () => {
	beforeEach(() => {
		cy.visit('/');
		login.login();
	});

	it('34847 | TC1: Validar agregar producto desde el PLP', () => {
		plp.randomCard().then(index => {
			const [title, desc, price, random] = index;
			plp.get.cartIcon().should('have.text', '1');
			plp.get.cardBtn().eq(random).should('have.text', 'Remove');
			plp.cartClick();
			shoppingCart.get.title().should('have.text', title);
			shoppingCart.get.desc().should('have.text', desc);
			shoppingCart.get.price().should('have.text', price);
		});
	});

	it('34847 | TC2: Validar agregar producto desde el PDP', () => {
		plp.clickRandomCard();
		pdp.addToCart().then(index => {
			const [title, desc, price] = index;
			pdp.get.cartIcon().should('have.text', '1');
			pdp.get.button().should('have.text', 'Remove');
			pdp.cartClick();
			shoppingCart.get.title().should('have.text', title);
			shoppingCart.get.desc().should('have.text', desc);
			shoppingCart.get.price().should('have.text', price);
		});
	});
});

removeLogs();