import { faker } from '@faker-js/faker';
describe("SwagLabs | Checkout | Finalizar o Cancelar la compra de un producto en la Website", () => {

    let the
    before(() => {
        cy.fixture("DOM/SCP/Checkckout2.Page").then((data) => {
            the = data
        })
    })
    
    beforeEach("Precondición: user must be at checkout-step-two workflow", () => {
        
        // Given: el usuario se debe encontrar en el homepage del website
        cy.visit("/")
        cy.url().should("contain", "saucedemo")
        cy.clearCookies()
        cy.clearLocalStorage();

        // And: el usuario debe loguearse exitosamente
        cy.get(the.login.username).type("standard_user")
        cy.get(the.login.password).type("secret_sauce")
        cy.get(the.login.submit).click();

        // el usuario se sitúe en el “inventory” y comienza una compra en la website

        function addtoCart() {
            cy.get(the.item.add).then(($item) => {
                const $i = Math.floor(Math.random() * $item.length + 1) - 1
                cy.wrap($item).eq($i).click()
            })
        }
        addtoCart()
        addtoCart()
        addtoCart()

        cy.get(the.Cart).click()
        cy.url().should("contain", "cart.html")
        
        cy.get(the.checkout).click()

        cy.get(the.form.firstName).type(faker.name.firstName())
        cy.get(the.form.lastName).type(faker.name.lastName())
        cy.get(the.form.postalCode).type(faker.address.zipCode())
        cy.get(the.form.continue).click()

        cy.url().should("contain", "checkout-step-two.html")
        
    })

    it("3600 | TC1: Check Finish Checkout button when there are multiple added items.", () => {
        // el usuario quiera finalizar una compra deberá hace click sobre el botón "Finish"
        cy.get(the.checkout2.finish).should("have.text", "Finish").click()
        cy.url().should("contain", "checkout-complete.html")
        cy.contains("THANK YOU FOR YOUR ORDER").should("exist")
        cy.get(the.AddedItems).should("not.exist")
    })
    
    it("3600 | TC2: Check Cancel Checkout button when there are multiple added items.", () => {
        // el usuario quiere cancelar una compra deberá hace click sobre el botón "Cancel"
        cy.get(the.checkout2.cancel).within((btn) => {
            cy.contains("Cancel").should("exist")
            cy.wrap(btn).click()
            cy.url().should("contain","inventory.html")
        })
        cy.get(the.AddedItems).then((item) => {
            expect(parseInt(item.text())).to.be.greaterThan(1)
        })
    })
})
