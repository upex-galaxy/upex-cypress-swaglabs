class shoppingCartPage {
	elements = {
		headerSecondaryTitle: () => cy.get('span[class=title]'),
		prodInvTitle: () => cy.get('[class=inventory_item_name]'),
		prodInvDesc: () => cy.get('[class=inventory_item_desc]'),
		prodInvPrice: () => cy.get('[class=inventory_item_price]'),
		prodInvDetailsTitle: () => cy.get('[class*=inventory_details_name]'),
		prodInvDetailsDesc: () => cy.get('.inventory_details_desc.large_size'),
		prodInvDetailsPrice: () => cy.get('[class*=inventory_details_price]'),
		btnPlp: () => cy.get('[class=pricebar]>button'),
		btnPdp: () => cy.get('[class=inventory_details_desc_container]>button'),
		btnAddToCart: () => cy.get('[class*=btn_primary]'),
		btnRemoveFromCart: () => cy.get('[class*=btn_secondary]'),
		shoppingCartBadge: () => cy.get('span[class="shopping_cart_badge"]'),
		shoppingCartLink: () => cy.get('[class=shopping_cart_link]'),
		cartItemLabel: () => cy.get('[class=cart_item_label]'),
		shoppingBack: () => cy.get('#continue-shopping'),
		prodDetailsPdp: () => cy.get('[class=inventory_details_desc_container]'),
		productBack: () => cy.get('[class=left_component]>button'),
		titleProd: [],
		descriptionProd: [],
		priceProd: [],
	};

	btnLength() {
		let btnLength;
		return this.elements
			.btnAddToCart()
			.then($btn => {
				btnLength = $btn.length;
			})
			.then(() => {
				return btnLength;
			});
	}

	filterBtnPlp(value) {
		let btnFilter;
		return this.elements
			.btnPlp()
			.filter(`:contains("${value}")`)
			.then($btn => {
				btnFilter = $btn.length;
			})
			.then(() => {
				return btnFilter;
			});
	}

	addToCartItemRandomPlp() {
		return this.elements
			.btnAddToCart()
			.then($el => {
				let num = Cypress._.random(0, $el.length - 1);

				cy.wrap($el)
					.eq(num)
					.parents('.inventory_item_description')
					.within(() => {
						this.elements.prodInvTitle().then($title => {
							this.elements.titleProd.push($title.text());
						});
						this.elements.prodInvDesc().then($desc => {
							this.elements.descriptionProd.push($desc.text());
						});
						this.elements.prodInvPrice().then($price => {
							this.elements.priceProd.push($price.text());
							cy.log(this.elements.priceProd);
						});
						this.elements.btnAddToCart().click();
					});
			})
			.then(() => {
				let productDetailsPlp = (...arrays) => [
					{
						title: this.elements.titleProd,
						description: this.elements.descriptionProd,
						price: this.elements.priceProd,
					},
				];
				Cypress.env('productDetailsPlp', productDetailsPlp());

				return productDetailsPlp();
			});
	}

	detailsPlpRem(number, valueClase) {
		let detailsPlpRem;
		return this.elements
			.btnRemoveFromCart()
			.parents('[class=inventory_item_description]')
			.then($el => {
				cy.wrap($el)
					.filter(`:contains(${Cypress.env('productDetailsPlp')[0].title[number]})`)
					.find(valueClase)
					.invoke('text')
					.then($text => {
						detailsPlpRem = $text;
					})
					.then(() => {
						return detailsPlpRem;
					});
			});
	}

	gotoShoppingCart() {
		this.elements.shoppingCartLink().click();
	}

	detailsProdCar(number, valueClase) {
		let detailsProdCar;
		return this.elements
			.cartItemLabel()
			.eq(number)
			.then($el => {
				cy.wrap($el)
					.find(valueClase)
					.invoke('text')
					.then($text => {
						detailsProdCar = $text;
					})
					.then(() => {
						return detailsProdCar;
					});
			});
	}

	backShopping() {
		this.elements.shoppingBack().click();
	}

	selectProduct() {
		this.elements
			.btnAddToCart()
			.parents('.inventory_item_description')
			.find('.inventory_item_name')
			.then($el => {
				let num = Cypress._.random(0, $el.length - 1);
				cy.wrap($el).eq(num).click();
			});
	}

	textBtnPdp() {
		let btnText;
		return this.elements
			.btnPdp()
			.invoke('text')
			.then($text => {
				btnText = $text;
			})
			.then(() => {
				return btnText;
			});
	}

	addToCartPdp() {
		return this.elements
			.btnPdp()
			.then($el => {
				cy.wrap($el)
					.parents('.inventory_details_container')
					.within(() => {
						this.elements.prodInvDetailsTitle().then($title => {
							this.elements.titleProd.push($title.text());
						});
						this.elements.prodInvDetailsDesc().then($desc => {
							this.elements.descriptionProd.push($desc.text());
						});
						this.elements.prodInvDetailsPrice().then($price => {
							this.elements.priceProd.push($price.text());
							cy.log(this.elements.priceProd);
						});
						this.elements.btnPdp().click();
					});
			})
			.then(() => {
				let productDetailsPdp = (...arrays) => [
					{
						title: this.elements.titleProd,
						description: this.elements.descriptionProd,
						price: this.elements.priceProd,
					},
				];
				Cypress.env('productDetailsPdp', productDetailsPdp());

				return productDetailsPdp();
			});
	}

	backToProducts() {
		this.elements.productBack().click();
	}

	detailsProdPdp(valueClase) {
		let detailsProdPdp;
		return this.elements.prodDetailsPdp().then($el => {
			cy.wrap($el)
				.find(valueClase)
				.invoke('text')
				.then($text => {
					detailsProdPdp = $text;
				})
				.then(() => {
					return detailsProdPdp;
				});
		});
	}

	deleteProduct() {
		this.elements.titleProd.splice(0);
		this.elements.descriptionProd.splice(0);
		this.elements.priceProd.splice(0);
	}
}

export const shoppingCartPag = new shoppingCartPage();
