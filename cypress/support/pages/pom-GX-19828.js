class PlpAndPdp {

    element = {

        inputUsername : ()=> cy.get('[type="text"]'),
        inputPassword : ()=> cy.get('[type="password"]'),
        buttonLogin: () => cy.get('[type="submit"]'),
        getListProducts: () => cy.get('[class$="_list"]'),
        buttonAddToCart: () => cy.get('[class*="btn_primary"]'),
        buttonRemove: () => cy.get('[class*="btn_secondary"]'),
        linkCartIcon: () => cy.get('[class$="link"]'),
        buttonBackTo: () => cy.get('[name$="-products"]'),
        getNameProduct: () => cy.get('[class$="name"]'),
        getNameProdct: () => cy.get('[class$="desc_label"]')
        
    }

    addProduct(numProductoToAdd) {
        let arrayNames = []
        return this.element.getListProducts().children().then(products => {
            let index = []
		    while (index.length < numProductoToAdd) {
		    	let randomNum = Math.floor(Math.random() * products.length);
                if (index.every(i => i !== randomNum)) {
                    cy.wrap(products).eq(randomNum).within(() => {
                        this.element.getNameProduct().invoke('text').as('nameText')
                        cy.get('@nameText').then(name => { arrayNames.push(name) })
                        this.element.buttonAddToCart().click();
                    })
		    		index.push(randomNum)
		    	}
            } 
        }).then(() => {
            return arrayNames
        })
    }

    removeProductPlp(numProductoToDelete, arrayNames) {
        let newArrayNames = []
        return this.element.getNameProduct().then(allNames => {
            for (let i = 0; i < numProductoToDelete; i++) {
                let randomNum = Math.floor(Math.random() * arrayNames.length)
                cy.wrap(allNames).contains(arrayNames[randomNum]).parents('[class$="description"]').find('button').click({ multiple: true })
                newArrayNames.push(arrayNames.splice(randomNum, 1))  
            }
        }).then(() => {
            return newArrayNames
        })  
    }

    removeProductPdp(numProductoToDelete, arrayNames) {
        let newArrayNames = []
        return this.element.getListProducts().then(() => {
            for (let i = 0; i < numProductoToDelete; i++) {
                let randomNum = Math.floor(Math.random() * arrayNames.length)
                this.element.getNameProduct().contains(arrayNames[randomNum]).click({ multiple: true })
                this.element.buttonRemove().last().click()
                this.element.buttonBackTo().click()
                newArrayNames.push(arrayNames.splice(randomNum, 1))  
            }
        }).then(() => {
            return newArrayNames
        })  
    }
}

export const plpAndPdp = new PlpAndPdp()