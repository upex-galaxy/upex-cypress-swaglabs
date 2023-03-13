// Página de PLP - Inventory
//Numero random [a,b] : Math.floor(Math.random() * (b - a + 1) + a )

class Inventory {
	/* 
        Funciones que se propone hacer
        1-Agregar Producto Al SC
        2-Ingresar a PDP
        3-Remover producto
        4-Filtros
    */
	get = {
		// Obtener cada elemento de la presente página:
		addProduct: () => cy.get('[data-test*="add-to-cart"]'),
		removeBtn: () => cy.get(),
		FilterDropDown: () => cy.get(),
	};

	addOneProduct() {
		// Remover un producto del SCP
		this.get.addProduct().then(products => {
			//Generar numero random
			let indx = Math.floor(Math.random() * products.length + 1) - 1;
			this.get.addProduct().eq(indx).click();
		});
	}
	addProducts(quantity) {
		let iteration = 0;
		while (iteration < quantity) {
			this.addOneProduct();
			iteration++;
		}
	}
}

export const inv = new Inventory();
