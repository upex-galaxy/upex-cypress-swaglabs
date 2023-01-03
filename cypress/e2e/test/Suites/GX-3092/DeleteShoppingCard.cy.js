describe('TS:3093', () => {
    

    beforeEach("User have to be logged", () => {
        cy.visit("https://www.saucedemo.com/", { failOnStatusCode: false })
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.userIsloggedIn()
        cy.url().should("contain", "inventory.html")
        cy.get("#shopping_cart_container").should("be.visible")
        cy.get("#add-to-cart-sauce-labs-backpack").should("be.visible")
    })
    it("|3093| TC1: Assert User have been remove an unique product in the shopping cart.", () => {
        cy.url().should("contain", "inventory.html")
        cy.get("#add-to-cart-sauce-labs-backpack").click()
        cy.get("#shopping_cart_container").should("be.visible").click()
        cy.get("#remove-sauce-labs-backpack").click()
        cy.get(".shopping_cart_link span").should("not.exist")
    })
    it("|3093| TC2: Assert User have been remove all the products in the shopping cart.(the limit value is 6)", () => {
        cy.url().should("contain", "inventory.html")
        cy.fixture("DOM/BotonRemove/remove.Page").then((the) => {
            the.productName.forEach(function (element) {
                cy.selectProduct(element)
            })
            cy.get("#shopping_cart_container").should("be.visible").click()
            the.productName.forEach(function (element) {
                cy.removeProduct(element)
            })
        })
    })
})
