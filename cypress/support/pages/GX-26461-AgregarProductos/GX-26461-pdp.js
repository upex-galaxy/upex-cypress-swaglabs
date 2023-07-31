class ProductDetail {
	get = {
		products: () => cy.get('[class="inventory_details_desc_container"]'),
		name: () => cy.get('[class$="name large_size"]'),
		description: () => cy.get('[class$="desc large_size"]'),
		price: () => cy.get('[class$="_price"]'),
		button: () => cy.get('[class$="btn_small btn_inventory"]'),
	};
}
export const pdp = new ProductDetail();
