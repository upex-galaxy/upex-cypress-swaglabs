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

		//hacer un for para agregar 2 productos al carrito , y
		// se puede con un Each pero hay que determinar cuales son los index 2 numeros random que no se repitan

		let selectproducto1 = Math.floor(Math.random() * prod);

		let addProduct = function (number) {
			cy.wrap(list)
				.eq(number)
				.within(() => {
					cy.get('button').click();
				});
		};
		addProduct(selectproducto1);
		//addProduct(randomItems2);

		cy.log(`Number one is: ${randomItems1}`);
		//cy.log(`Number one is: ${randomItems2}`);
	});

	//agregar producto aleatorio al carrito

	it.only('GX-10740|TC01 validar que el usuario complete exitosamente el formulario del comprador', () => {
		expect(1).eq(1);
	});

	it('GX-10740|TC02 validar mensajes de error cuando el usuario ingresa dato nulos en formulario checkout', () => {});

	it('GX-10740|TC03 validar caracteres especiales en formulario checkout', () => {});

	it('GX-10740|TC04 validar mensajes de error al ingresar caracteres numericos en campos del formulario checkout', () => {});

	it('GX-10740|TC05 validar regreso a seccion cart al hacer click en boton cancel del formulario chechout', () => {});
});
