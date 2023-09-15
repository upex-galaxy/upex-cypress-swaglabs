class Login {
	get = {
		userNameInput: () => cy.get('#user-name'),
		passwordInput: () => cy.get('#password'),
		loginButton: () => cy.get('#login-button'),
		nameProductValidation: () => cy.get('#item_4_title_link'),
		
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
	backPackProduct() {
		this.get.nameProductValidation();
	}
} 
class AddProduct {
	get = {
		bttnAddProduct: () => cy.get('#add-to-cart-sauce-labs-backpack'),
		shoppingCart: () => cy.get('#shopping_cart_container'),
		CheckoutNext: () => cy.get('#checkout'),
		cartContainer:() => cy.get('#shopping_cart_container')

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
	ValidationContainer(number) {
		this.get.cartContainer().type(number);
	}
}
class ConfirmThePurchase{
	get = {
		nextContinue: () => cy.get('#continue'),
		firstNameInput: () => cy.get('#first-name'),
		lastNameInput: () => cy.get('#last-name'),
		postalCodeInput: () => cy.get('#postal-code'),
		paymentInfo: () => cy.get('.summary_info_label'),
		shippingInfo: () => cy.get('.summary_info_label'),
		priceTotal: () => cy.get('.summary_info_label'),
		total: () => cy.get('.summary_total_label'),
		finish: () => cy.get('#finish'),
		messageOk:()=> cy.get('.complete-header')
	};
	bttnContinue() {
		this.get.nextContinue().click();
	}
	firstNameField(name) {
		this.get.firstNameInput().type(name);
	}
	lastNameField(name) {
		this.get.lastNameInput().type(name);
	}
	postalCodeField(number) {
		this.get.postalCodeInput().type(number);
	}
	payment() {
		this.get.paymentInfo().eq(0);
	}
	shipping() {
		this.get.shippingInfo().eq(1);
	}
	price() {
		this.get.priceTotal().eq(2);
	}
	resultTotal() {
		this.get.total();
	}
	bttnFinish() {
		this.get.finish().click();
	}
	resultOk() {
		this.get.messageOk();
	}

}

export const login = new Login();
export const addproduct = new AddProduct();
export const finalpurchase = new ConfirmThePurchase();