class RemoverPage {
	constructor() {
		this.usernameInput = 'input[data-test="username"]';
		this.passwordInput = 'input[data-test="password"]';
		this.loginButton = 'input[data-test="login-button"]';
		this.addToCartButtons = {
			backpack: 'button[data-test="add-to-cart-sauce-labs-backpack"]',
			tShirt: 'button[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]',
			bikeLight: 'button[data-test="add-to-cart-sauce-labs-bike-light"]',
		};
		this.removeButtons = {
			backpack: 'button[data-test="remove-sauce-labs-backpack"]',
			tShirt: 'button[data-test="remove-test.allthethings()-t-shirt-(red)"]',
			bikeLight: 'button[data-test="remove-sauce-labs-bike-light"]',
		};
		this.cartContainer = '#shopping_cart_container';
		this.item4TitleLink = '#item_4_title_link';
		this.item3TitleLink = '#item_3_title_link';
		this.backToProductsButton = 'button[data-test="back-to-products"]';
	}
	//Esta función se encarga de realizar el inicio de sesión en la página. Recibe el nombre de usuario y la contraseña como parámetros, y luego interactúa con los elementos de la página (campos de entrada y botón de inicio de sesión) para completar el formulario y hacer clic en el botón de inicio de sesión.
	login(username, password) {
		cy.get(this.usernameInput).type(username);
		cy.get(this.passwordInput).type(password);
		cy.get(this.loginButton).click();
	}
	//Esta función se encarga de agregar los productos al carrito de compras. Interactúa con los botones correspondientes de cada producto en la página de inventario para agregarlos al carrito.
	addToCart() {
		cy.get(this.addToCartButtons.backpack).click();
		cy.get(this.addToCartButtons.tShirt).click();
		cy.get(this.addToCartButtons.bikeLight).click();
	}
	//Esta función se encarga de eliminar un producto desde la página de lista de productos (PLP). Interactúa con el botón de eliminar correspondiente al producto en el PLP para eliminarlo del carrito.
	removeFromPLP() {
		cy.get(this.removeButtons.backpack).click();
	}
	//Esta función se encarga de eliminar un producto desde la página de detalles del producto (PDP). Interactúa con el botón de eliminar correspondiente al producto en el PDP para eliminarlo del carrito.
	removeFromPDP() {
		cy.get(this.removeButtons.backpack).click();
	}
	//Ir al PDP del item4 q seria
	goToPDP() {
		cy.get(this.item4TitleLink).click();
	}
	//Ir al PLP
	goBackToProducts() {
		cy.get(this.backToProductsButton).click();
	}
	//Verificar icono carrito
	verifyCartItemCount(expectedCount) {
		cy.get(this.cartContainer).should('contain', expectedCount);
	}
	//Verifica icono carrito vacio
	verifyCartIsEmpty() {
		cy.get(this.cartContainer).should('not.contain', 'Shopping cart');
	}
}

export default RemoverPage;
