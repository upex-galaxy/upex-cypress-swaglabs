let NameItem = [];
let Num = [];
let PriceItem = [];

class Productlistpage {
	get = {
		Productname: () => cy.get('[class*=item_name]'),
		Productdesc: () => cy.get('[class*=item_desc]'),
		Productprice: () => cy.get('[class*=item_price]'),
		Productimg: () => cy.get('[class*=item_img]'),
		Addtocart: () => cy.get('[class*=btn_primary]'),
		Removeofcart: () => cy.get('[class*=btn_secondary]'),
		cart: () => cy.get('[class*=shopping_cart_link]'),
	};
	SelectrandomItem() {
		this.get.Productname().then(num => {
			let Num = Math.floor(Math.random() * num.length + 1) - 1;
			this.get.Productname().eq(Num).click();
		});
	}
	GotoShopingCart() {
		this.get.cart().click();
	}
	AddtoCartItemRandom() {
		this.get.Addtocart().then(num => {
			let Num = Math.floor(Math.random() * num.length + 1) - 1;
			this.get.Addtocart().eq(Num).click();
		});
	}
	GetRandomItem() {
		this.get.Addtocart().then(Large => {
			let num = Math.floor(Math.random() * Large.length + 1) - 1;
			Num.push(num);
		});
	}

	GetName() {
		this.get
			.Productname()
			.eq(Num)
			.then(text1 => {
				NameItem.push(text1.text());
			});
	}
	GetPrice() {
		this.get
			.Productprice()
			.eq(Num)
			.then(text2 => {
				PriceItem.push(text2.text());
			});
	}
	addtoCartItemRandom() {
		this.get.Addtocart().eq(Num).click();
	}
}

export const ProductListpage = new Productlistpage();
export const nameItem = NameItem;
export const priceItem = PriceItem;
