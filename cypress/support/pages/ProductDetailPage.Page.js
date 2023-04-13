class ProductDetailpage {
	get = {
		productName: () => cy.get('[class*=details_name]'),
		productPrice: () => cy.get('[class*=details_price]'),
		productDesc: () => cy.get('[class*=details_desc]'),
		AddtoCart: () => cy.get('[class*=btn_primary]'),
		cart: () => cy.get('[class*=shopping_cart]'),
	};
	AddItemToCart() {
		this.get.AddtoCart().click();
	}
}
export const productDetailPage = new ProductDetailpage();
