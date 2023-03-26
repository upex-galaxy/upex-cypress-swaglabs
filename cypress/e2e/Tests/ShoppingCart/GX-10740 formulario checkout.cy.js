const username = 'standard_user';
const password = 'secret_sauce';

describe('SwagLabs | Checkout Info | Insertar información del comprador.', () => {
	beforeEach('login Swag Labs, añadir productos y situar en seccion card', () => {
		cy.visit('https://www.saucedemo.com/');
		cy.url().should('contain', 'sauce');
		//login
		cy.get('#user-name').type(username);
		cy.get('#password').type(password);
		cy.get('#login-button').click();

		cy.get('.inventory_container').within(list => {
			const producto = list.length + 1;
			const randomProduct = Math.floor(Math.random() * producto);
			cy.get('.inventory_item')
				.eq(randomProduct)
				.then(() => {
					cy.get('#add-to-cart-sauce-labs-backpack').eq(randomProduct).click();
				});
		});
		//agregar producto aleatorio al carrito
	});

	it.only('GX-10740|TC01 validar que el usuario complete exitosamente el formulario del comprador', () => {
		expect(1).eq(1);
	});

	it('GX-10740|TC02 validar mensajes de error cuando el usuario ingresa dato nulos en formulario checkout', () => {});

	it('GX-10740|TC03 validar caracteres especiales en formulario checkout', () => {});

	it('GX-10740|TC04 validar mensajes de error al ingresar caracteres numericos en campos del formulario checkout', () => {});

	it('GX-10740|TC05 validar regreso a seccion cart al hacer click en boton cancel del formulario chechout', () => {});
});
