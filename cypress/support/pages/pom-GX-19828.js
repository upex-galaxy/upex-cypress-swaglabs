class PlpAndPdp {

    element = {

        inputUsername : ()=> cy.get('[type="text"]'),
        inputPassword : ()=> cy.get('[type="password"]'),
        buttonLogin: () => cy.get('[type="submit"]'),
        getListProducts: () => cy.get('[class$="_list"]'),
        buttonSelectProduct: () => cy.get('button'),
        linkCartIcon: () => cy.get('[class$="link"]'),
        buttonBackTo: () => cy.get('[name$="-products"]'),
        getNameProduct: () => cy.get('[class$="desc_label"]'),
        buttonContinueShopping: () => cy.get('[name$="shopping"]')

    }

    selectProduct(numProductoToSelect) {
        this.element.getListProducts().children().then(products => {
            const totalProducts = products.length;
            const items = []
		    while (items.length < numProductoToSelect) {
		    	let selectProductRandom = Math.floor(Math.random() * totalProducts);
		    	if (items.every(item => item !== selectProductRandom)) {
		    		items.push(selectProductRandom)
		    	}
            }
		    for (const item of items) {
		        cy.wrap(products).eq(item).within(() => {
		    		plpAndPdp.element.buttonSelectProduct().click({ multiple: true });
                })
            }
        })
    }

    removeProductPlp(numProductoToDelete, numProductoSelected) {
        for (let i = 0; i < numProductoToDelete; i++) {
            cy.url().should('contain', '/inventory.html')
            this.element.buttonSelectProduct().contains('Remove').parents('[class$="description"]').find('[class$=name]').then(names => {
                let name = names.text()
                this.element.buttonSelectProduct().contains('Remove').click({ multiple: true })
                this.element.linkCartIcon().should('contain', numProductoSelected - 1 || '')
                numProductoSelected--
                this.element.linkCartIcon().click()
                this.element.getNameProduct().should('not.have.text', name)
                this.element.buttonContinueShopping().click()
            })
        }
    }
    
    removeProductPdp(numProductoToDelete, numProductoSelected) {
        for (let i = 0; i < numProductoToDelete; i++) {
            const url = 'item.html?id='
            this.element.buttonSelectProduct().contains('Remove').parents('[class$="description"]').find('[class$=name]').then(names => {
                let name = names.text()
                this.element.buttonSelectProduct().contains('Remove').parents('[class$="description"]').find('a').click({ multiple: true })
                cy.url().should('contain', url)
                this.element.linkCartIcon().should('contain', numProductoSelected)
                this.element.buttonSelectProduct().contains('Remove').click({ multiple: true })
                this.element.linkCartIcon().should('contain', numProductoSelected - 1 || '')
                numProductoSelected--
                this.element.buttonBackTo().click()
                this.element.linkCartIcon().click()
                this.element.getNameProduct().should('not.have.text', name)
                this.element.buttonContinueShopping().click()
            })
        }
    }
}

export const plpAndPdp = new PlpAndPdp()