import the from '../../../fixtures/data/agregarProductos.json';

describe('✅SwagLabs | SCP | Agregar producto al carrito de compras desde el PLP o PDP', () => {
	beforeEach('Precondición: El usuario debe haber logeado a saucedemo', () => {
		cy.visit(the.url.Main);
		cy.url().should('contain', the.url.Assertion);

		cy.get(the.login.Username).type(the.login.Data.Username);
		cy.get(the.login.Password).type(the.login.Data.Password);
		cy.get(the.login.Submit).click();

		cy.url().should('contain', the.url.Assertion2);
	});

	it('TC01 - Validar agregar un producto al SCP desde el PLP', () => {
		cy.get(the.plp.AddToCart.Backpack).click();
		cy.get(the.plp.Input.Cart).click();

		cy.get(the.plp.Input.Label).should('contain', the.assertions.Backpack.Name);
		cy.get(the.plp.Input.Label).should('contain', the.assertions.Backpack.Description);
	});
	it('TC02 - Validar agregar un producto al SCP desde el PDP', () => {
		cy.get(the.plp.Input.Light).click();
		cy.get(the.pdp.AddToCart.Light).click();
		cy.get(the.pdp.Input.Cart).click();

		cy.get(the.plp.Input.Label).should('contain', the.assertions.Light.Name);
		cy.get(the.plp.Input.Label).should('contain', the.assertions.Light.Description);
	});
	it('TC03 - Validar agregar 2 o mas productos al SCP desde el PLP', () => {
		cy.get(the.plp.AddToCart.BoltTShirt).click();
		cy.get(the.plp.AddToCart.Jacket).click();
		cy.get(the.plp.Input.Cart).click();

		cy.get(the.plp.Input.Label).should('contain', the.assertions.BoltTShirt.Name).and('contain', the.assertions.Jacket.Name);
		cy.get(the.plp.Input.Label).should('contain', the.assertions.BoltTShirt.Description).and('contain', the.assertions.Jacket.Description);
	});
	it('TC04 - Validar agregar 2 o mas productos al SCP desde el PDP', () => {
		cy.get(the.plp.Input.Onesie).click();
		cy.get(the.pdp.AddToCart.Onesie).click();
		cy.get(the.pdp.Input.BackToPLP).click();

		cy.get(the.plp.Input.RedTShirt).click();
		cy.get(the.pdp.AddToCart.RedTShirt).click();
		cy.get(the.pdp.Input.Cart).click();

		cy.get(the.plp.Input.Label).should('contain', the.assertions.Onesie.Name).and('contain', the.assertions.RedTShirt.Name);
		cy.get(the.plp.Input.Label).should('contain', the.assertions.Onesie.Description).and('contain', the.assertions.RedTShirt.Description);
	});
	it('TC05 - Validar agregar 2 o mas productos al SCP desde PLP y PDP', () => {
		cy.get(the.plp.AddToCart.BoltTShirt).click();
		cy.get(the.plp.Input.Light).click();
		cy.get(the.pdp.AddToCart.Light).click();
		cy.get(the.pdp.Input.Cart).click();

		cy.get(the.plp.Input.Label).should('contain', the.assertions.BoltTShirt.Name).and('contain', the.assertions.Light.Name);
		cy.get(the.plp.Input.Label).should('contain', the.assertions.BoltTShirt.Description).and('contain', the.assertions.Light.Description);
	});
});
