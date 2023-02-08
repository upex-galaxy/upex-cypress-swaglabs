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
		postalCodeCO:()=>("#postal-code"),
		checkoutButton:()=>cy.get("#checkout"),
		invContainer:()=>cy.get(".inventory_container"),
		invItem:()=> cy.get(".inventory_item"),
		addCart:()=>cy.get('[id="add-to-cart-sauce"]').click(),
		Cart:()=>("#shopping_cart_container").click()
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
		this.get.firstNameCO().type(text)

	}
	lastName(text){
		this.get.lastNameCO().type(text)

	}
	postalCode(text){
		this.get.postalCodeCO().type(text)

	}
	cancel(){
		this.get.cancelButton().click()
		
	}
	continue(){
		this.get.cancelButton().click()
	
	}
	
	background(){
		this.get.invContainer().within((list)=>{
			const product = list.length
			const randomProduct = (Math.floor(Math.random(product * list)))
			this.get.invItem().eq(randomProduct)
			this.get.Cart()	
			this.get.checkoutButton()	
		})
	}
}
export const Login = new login()
