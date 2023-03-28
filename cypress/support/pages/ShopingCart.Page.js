// Página de Shoping Cart
class ShoppingCart {
	/* 
    Funciones que se propone hacer
    1-Remover Objeto
        Click en remover
    2-Obtener Cantidad de Items de SC icon
    3-Click en continue Shopping btn
    4-Click en Checkout
*/
	get = {
		// Obtener cada elemento de la presente página:
		removeBtn: () => cy.get('[data-test*="remove-"]'),
		iconSC: () => cy.get('#shopping_cart_container'),
		quantityProducts: () => cy.get('#shopping_cart_container'),
		checkout: () => cy.get('[data-test*=checkout]'),
	};
	removeLastProduct() {
		// Remover un producto del SCP
		this.get.removeBtn().click();
	}
	removeProduct() {
		this.get.removeBtn().then(products => {
			//Generar numero random 0 a x ,sin incluir x
			let indx = Math.floor(Math.random() * products.length + 1) - 1;
			this.get.removeBtn().eq(indx).click();
		});
	}
	goToSC() {
		this.get.iconSC().click();
	}
	SubmitCheckout() {
		this.get.checkout().click();
	}
}

export const cart = new ShoppingCart();
