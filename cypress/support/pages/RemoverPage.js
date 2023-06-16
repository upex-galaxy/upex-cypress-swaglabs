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
		this.cartContainer = '.shopping_cart_link';
		this.item4TitleLink = '#item_4_title_link';
		this.item3TitleLink = '#item_3_title_link';
		this.backToProductsButton = 'button[data-test="back-to-products"]';
	}

	get = {
		cartContainer2: () => cy.get('.shopping_cart_link'),
	};

	login(username, password) {
		cy.get(this.usernameInput).type(username);
		cy.get(this.passwordInput).type(password);
		cy.get(this.loginButton).click();
	}

	addToCart() {
		cy.get(this.addToCartButtons.backpack).click();
		cy.get(this.addToCartButtons.tShirt).click();
		cy.get(this.addToCartButtons.bikeLight).click();
	}

	removeFromPLP() {
		cy.get(this.removeButtons.backpack).click();
	}

	removeFromPLP2() {
		cy.get(this.removeButtons.tShirt).click();
	}

	removeFromPLP3() {
		cy.get(this.removeButtons.bikeLight).click();
	}

	removeFromPDP() {
		cy.get(this.removeButtons.backpack).click();
	}
	removeFromPDP2() {
		cy.get(this.removeButtons.tShirt).click();
	}
	removeFromPDP3() {
		cy.get(this.removeButtons.bikeLight).click();
	}

	goToPDP() {
		cy.get(this.item4TitleLink).click();
	}
	goToPDP2() {
		cy.get(this.item3TitleLink).click();
	}

	goBackToProducts() {
		cy.get(this.backToProductsButton).click();
	}
}

export default RemoverPage;
