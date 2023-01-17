import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";

context("SwagLabs | PLP Sorting | Filtrar productos por nombre o precio", () => {

    Given("el usuario debe encontarse logeado en la home page", () => {
        cy.visit("https://www.saucedemo.com/")
        cy.fixture("DOM/GX-3874/Login.Page")
            .then((the) => {
                cy.get(the.input.username).type(the.data.user)
                cy.get(the.input.password).type(the.data.password)
                cy.get(the.submitButton).click()
            })
    })
    And("visualizar al menos 2 productos disponibles con diferentes nombres y precios", () => {
        cy.get(".inventory_item")
            .should("have.length.at.least", 2)
    })
    And("visualizar el filtro seleccionado por default: NAME A TO Z", () => { 
        cy.get(".select_container")
            .children(".active_option").should("contain","Name (A to Z)")
            
    })


    describe("3875 | TC1: Validar filtrar productos por NOMBRE descendente", () => {

        When("seleccionar filtro Name Z to A", () => {
            cy.get(".select_container select")
                .select("Name (Z to A)")
                cy.get(".select_container select")
                    .should("have.value", "za")
        })

        Then("Chequear que los productos se organizan de la Z a la A",()=> {
            
        })
    })

    describe("3875 | TC2: Validar filtrar productos por NOMBRE ascendente",()=>{

        When("seleccionar filtro Name A to Z", () => {
            cy.get(".select_container select")
                .select("za")
            cy.get(".product_sort_container")
                .select("az")
                cy.get(".select_container select")
                    .should("have.value", "az")
        })
        Then("Chequear que los productos se organizan de la A a la Z", () => {
        
        })
    })

    describe("3875 | TC3: Validar filtrar productos por PRECIO ascendente",()=>{
        When("seleccionar filtro Price Low to high", () => {
            cy.get(".select_container select")
                .select("lohi")
                cy.get(".select_container select")
                    .should("have.value", "lohi")
        })
        Then("Chequear que los productos se organizan según su precio desde el más económico al más caro", () => {
            
        })

    })

    describe("3875 | TC4: Validar filtrar productos por PRECIO descendente",()=>{
        When("seleccionar filtro Price High to low", () => {
            cy.get(".select_container select")
                .select("hilo")
                cy.get(".select_container select")
                    .should("have.value", "hilo")           
        })
        Then("Chequear que los productos se organizan según su precio desde el más caro al más económico", () => {
            
        })

    })

})