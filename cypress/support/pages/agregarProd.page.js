class agregar {
	productos = {
		UserNameInput: () => cy.get('[type="text"]'),
		PasswordInput: () => cy.get('[type="password"]'),
		LoginButton: () => cy.get('[name="login-button"]'),
		Carrito: () => cy.get('[class="shopping_cart_badge"]'),
		listaCarrito: () => cy.get('[class="cart_list"]'),
		NombreProducto: () => cy.get('[class=inventory_item_name]'),
		DescripciónProducto: () => cy.get('[class="inventory_item_desc"]'),
		Precio: () => cy.get('[class="inventory_item_price"]'),
	};

	TypeUserName(username) {
		this.productos.UserNameInput().type(username);
	}
	TypePassword(password) {
		this.productos.PasswordInput().type(password);
	}
	Button() {
		this.productos.LoginButton().click();
	}
}
export const Agregar = new agregar();
