describe('US GX-668 | TS: ✅SwagLabs | Delete a product from the shopping cart', () => {
    

    beforeEach("User have to be logged", () => {
        cy.visit("https://www.saucedemo.com/", { failOnStatusCode: false })
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.LogIn()
    })
    it("|TS-936| TC1: Assert User have been Logged correctly.", () => {
        cy.url().should("contain", "inventory.html")
        cy.get("#shopping_cart_container").should("be.visible")
        cy.get("#add-to-cart-sauce-labs-backpack").should("be.visible")
    })
    it("|TS-936| TC2: Assert User have been remove an unique product in the shopping cart.", () => {
        cy.url().should("contain", "inventory.html")
        cy.get("#add-to-cart-sauce-labs-backpack").click()
        cy.get("#shopping_cart_container").should("be.visible").click()
        cy.get("#remove-sauce-labs-backpack").click()
        cy.get(".shopping_cart_link span").should('not.exist')
    })
    it("|TS-936| TC3: Assert User have been remove all the products in the shopping cart.(the limit value is 6)", () => {
        cy.url().should("contain", "inventory.html")
        cy.get("#shopping_cart_container").should("be.visible")
        cy.get("#add-to-cart-sauce-labs-backpack").should("be.visible")
        cy.get("#add-to-cart-sauce-labs-backpack").should("be.visible")
    })
})