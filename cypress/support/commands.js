// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
import 'cypress-file-upload';
import { getCypressElementCoordinates } from 'cypress-real-events/getCypressElementCoordinates';
require('@4tw/cypress-drag-drop')

Cypress.Commands.add("userIsloggedIn", () => {
    cy.fixture("DOM/Account/Account.Page").then((the) => {
        cy.visit(the.url) // ir a url
        cy.url().should("contain", "saucedemo")
        
        cy.get(the.input.username)
            .type(the.data.user) // introducir texto en el campo username
        
        cy.get(the.input.password)
            .type(the.data.password) // introducir texto en el campo password
        
        cy.get(the.submitButton).click() // Hacer click en el button Log in
    
        cy.url().should("contain", "inventory") // El usuario debe estar registrado
    })
})

Cypress.Commands.add("addProductToCart", () => {
    cy.get('button.btn_inventory')
            .should('have.length.greaterThan', 0)
            .its('length')
            .then($LengthButton => {
                const RandomNumber = Cypress._.random(0, $LengthButton - 1)
                this.selectedItem = RandomNumber

                cy.get('button.btn_inventory')
                    .eq(RandomNumber)
                    .click() //Añade un producto random al SCP
            })
})

Cypress.Commands.add("removeProductPLP", () => {
    cy.fixture("DOM/PLP/RemoveProductToPLP.Page").then((the) => {

        cy.get(the.buttonAddToCart)
            .eq(this.selectedItem)
            .click() //hace click sobre el botón "Remove" del producto previamente añadido

        cy.get(the.buttonShoppingCart)
            .should('not.exist') // se resta -1 en icono del SCP

        cy.get(the.buttonAddToCart)
            .eq(this.selectedItem)
            .should('have.text', 'Add to cart') // se valida que el button "remove" cambie a "add to cart"
    })
})

Cypress.Commands.add("removeProductPDP", () => {
    cy.fixture("DOM/PLP/RemoveProductToPLP.Page").then((the) => {

        //precondición: usuario se situa en el PDP
        cy.get(the.productItem)
            .eq(this.selectedItem)
            .click() //Va al PDP del producto seleccionado anteriormente como precondición
            
        cy.url().should("contain", "inventory-item")
            
        //acción
        cy.contains(the.buttonAddToCartPDP, /^Remove/)
            .click() //hace click sobre el botón "Remove"
        
        cy.get(the.buttonShoppingCart)
            .should('not.exist') // se resta -1 en icono del SCP
        
        cy.get(the.buttonAddToCart)
            .should('have.text', 'Add to cart') // se valida que el button "remove" cambie a "add to cart" */
    })
})
        
Cypress.Commands.add("Login", () =>
{
    cy.fixture("DOM/sauce/login.Page").then((the) =>
        {
            cy.get(the.input.username).type(the.data.user)
            .should("have.value", the.data.user)
        
            cy.get(the.input.password).type(the.data.password)
            .should("have.value", the.data.password)
        
            cy.contains("Login").click()
        })
})
Cypress.Commands.add("CustomLogin", (user,password) =>
{
    cy.fixture("DOM/sauce/login.Page").then((the) =>
        {
            cy.get(the.input.username).type(user)
            .should("have.value", user)
        
            cy.get(the.input.password).type(password)
            .should("have.value", password)
        
            cy.contains("Login").click()
        })
})
Cypress.Commands.add("ErrorCard", () =>
{
    cy.fixture("DOM/sauce/login.Page").then((the) =>
        {
            cy.get(the.error)
                .should("be.visible")
                .and("contain.text",
                    "Epic sadface: Username and password do not match any user in this service")
        })
})
Cypress.Commands.add("DragDrop", (obj, X, Y) =>
{
    cy.get(obj)
        .move({ deltaX: X, deltaY: Y })
    cy.get(obj)
        .should("have.attr", "style",`position: relative; left: ${X}px; top: ${Y}px;`)
})
Cypress.Commands.add("DragDropX", (obj, X, Y) =>
{
    cy.get(obj)
        .move({ deltaX: X, deltaY: Y })
    cy.get(obj)
        .should("have.attr", "style",`position: relative; left: ${X}px; top: 0px;`)
})
Cypress.Commands.add("DragDropY", (obj, X, Y) =>
{
    cy.get(obj)
        .move({ deltaX: X, deltaY: Y })
    cy.get(obj)
        .should("have.attr", "style",`position: relative; left: 0px; top: ${Y}px;`)
})

// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })