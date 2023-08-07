class Login {
	get = {
		userNameInput: () => cy.get('#user-name'),
		passwordInput: () => cy.get('#password'),
		loginButton: () => cy.get('#login-button'),
	};

	enterUsername(user) {
		this.get.userNameInput().type(user);
	}
	enterPassword(password) {
		this.get.passwordInput().type(password);
	}
	buttonLogin() {
		this.get.loginButton().click();
	}
} 
class AddProduct {
	get = {
		bttnAddProduct: () => cy.get('#add-to-cart-sauce-labs-backpack'),
		shoppingCart: () => cy.get('#shopping_cart_container'),
		CheckoutNext:()=> cy.get('#checkout')

	};
	buttonAdd() {
		this.get.bttnAddProduct().click();
	}
	bttnShoppingCart() {
		this.get.shoppingCart().click();
	}
	bttnCheckout() {
		this.get.CheckoutNext().click();
	}
    
}

export const login = new Login();
export const addproduct = new AddProduct();