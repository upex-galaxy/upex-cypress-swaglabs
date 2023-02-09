class inventory {
    get = {
        invContainer:()=>cy.get(".inventory_container"),
		invItem:()=> cy.get(".inventory_item"),
		addCart:()=>cy.get('[id*="add-to-cart-sauce"]'),
        cart:()=>cy.get("#shopping_cart_container")

    }
    
    selectProductAndAddToCart(){ // SELECT RANDOM PRODUCT AND ADD THE PRODUCT TO CART
		this.get.invContainer().within((list)=>{
			const product = list.length + 1
			const randomProduct = (Math.floor(Math.random() * product))
			this.get.invItem().eq(randomProduct).then(()=>{
				this.get.addCart().eq(randomProduct).click()
			})
		})
	}
    clickOnCart(){ //CLICK ON CART FOR ADVANCE TO NEXT ENDPOINT
        this.get.cart().click()
    }
}
export const Inventory = new inventory()