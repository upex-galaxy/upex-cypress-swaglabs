//  LOGIN SWAGLABS

class login {
	get = {//LOGIN
		inputUsername: () => cy.get("[type='text']"),
		inputPassword: () => cy.get("[type='password']"),
		loginButton: () => cy.get('#login-button').contains('Login'),
		error: () => cy.get("[data-test='error']"),
		//CHECKOUT
		cancelButton:()=>cy.get("#cancel"),
		continueButton:()=>cy.get("#continue"),
        lastNameCO:()=>cy.get("#last-name"),
        firstNameCO:()=>cy.get("#first-name"),
		postalCodeCO:()=>cy.get("#postal-code"),
		checkoutButton:()=>cy.get('#checkout'),
		invContainer:()=>cy.get(".inventory_container"),
		invItem:()=> cy.get(".inventory_item"),
		addCart:()=>cy.get('[id*="add-to-cart-sauce"]'),
		cart:()=>cy.get("#shopping_cart_container")
		
	}
	enterUsername(text) {
		this.get.inputUsername().type(text)
	}
	enterPassword(text) {
		this.get.inputPassword().type(text)
	}
	submitButton() {
		this.get.loginButton().click()
	}
	firstName(text){
		this.get.firstNameCO().click().type(text)

	}
	lastName(text){
		this.get.lastNameCO().click().type(text)

	}
	postalCode(text){
		this.get.postalCodeCO().click().type(text)

	}
	cancel(){
		this.get.cancelButton().click()
		
	}
	continue(){
		this.get.continueButton().click()
	
	}
	
	background(){
		this.get.invContainer().within((list)=>{
			const product = list.length + 1
			const randomProduct = (Math.floor(Math.random() * product))
			this.get.invItem().eq(randomProduct).then(()=>{
				this.get.addCart().eq(randomProduct).click()
			})
		})
		this.get.cart().click()
		this.get.checkoutButton().click()
	}
}
export const Login = new login()
