class PlpAndPdp {

    element = {

        inputUsername : ()=> cy.get('[type="text"]'),
        inputPassword : ()=> cy.get('[type="password"]'),
        buttonLogin: () => cy.get('[type="submit"]'),
        getProducts: () => cy.get('[class$="_list"]'),
        buttonProduct: () => cy.get('button'),
        linkCartIcon: () => cy.get('[class$="cart_link"]')

    }

    removeProduct(numIter) {
        for (let i = 0; i < numIter; i++) {
            this.element.buttonProduct().contains('Remove').click() 
        }
    }
}

export const plpAndPdp = new PlpAndPdp()