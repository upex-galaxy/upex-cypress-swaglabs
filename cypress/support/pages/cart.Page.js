class cart {
    get = {
        checkoutButton:()=>cy.get('#checkout'),
		
	}
clickCheckout(){
    this.get.checkoutButton().click()
    }   
}
export const Cart = new cart()