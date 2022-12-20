// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
import 'cypress-file-upload'; import 'cypress-wait-until';
require('@4tw/cypress-drag-drop')
require('cypress-downloadfile/lib/downloadFileCommand')

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

Cypress.Commands.add("addProductCustom", (num) => {
    
    let list = []
    
    cy.get('button.btn_inventory')
    .should('have.length.greaterThan', 0)
    .its('length')
    .then($LengthButton => {
        while (list.length < num) {
            const RandomNumber = Cypress._.random(0, $LengthButton - 1)
            if (list.includes(RandomNumber)){
                continue
            }
            else {
                list.push(RandomNumber)
            }
        }

        cy.log('lista de indices de items a seleccionar:')
        cy.log(list)

        listRandom = list
        numOfProducts = num

        for (const indice of list){
            cy.get('button.btn_inventory')
                .eq(indice)
                .click()  
        }
    })
})

Cypress.Commands.add("removeCustomProductsPLP", () => {
    cy.fixture("DOM/BotonRemove/RemoveProducts.Page").then((the) => {

        cy.get(the.shoppingCartAlert).should('have.text', numOfProducts) //se valida que haya el numero de productos en el SCP

        for (const indice of listRandom){
            cy.get(the.buttonAddToCart)
                .eq(indice)
                .click()//hace click sobre el botón "Remove" de cada uno de los productos previamente añadidos

            cy.get(the.buttonAddToCart)
                .eq(indice)
                .should('have.text', 'Add to cart') //se valida que cada button "remove" cambie a "add to cart"
            
            numOfProducts = numOfProducts - 1

            if (numOfProducts === 0) {
                cy.get(the.shoppingCartAlert).should('not.exist')
            } else {
                cy.get(the.shoppingCartAlert).should('have.text', numOfProducts) //se resta -1 en icono del SCP por cada click en "remove"
            }

            cy.get(the.shoppingCartLink).click() //se hace click en el icono del SCP

            cy.get(the.cartItem).should('have.length', numOfProducts) //se valida que se elimina el producto del SCP

            cy.get(the.continueShoppingBtn).click() //se hace click en el button "continue shopping"
        }
    })
})

Cypress.Commands.add("removeCustomProductsPDP", () => {
    cy.fixture("DOM/BotonRemove/RemoveProducts.Page").then((the) => {

        cy.get(the.shoppingCartAlert).should('have.text', numOfProducts)
        
        //precondición: usuario se situa en el PDP de cada producto, al no poder usar cy.visit(), se recurre a este paso
        for (const indice of listRandom){
            cy.get(the.productItem)
            .eq(indice)
            .click()//Va al PDP del producto seleccionado anteriormente como precondición
            
            cy.url().should("contain", "inventory-item")
            
            cy.contains(the.buttonAddToCartPDP, /^Remove/)
                .click() //hace click sobre el botón "Remove"
            
            cy.get(the.backToProductsBtn).click()
            
            cy.get(the.buttonAddToCart)
                .eq(indice)
                .should('have.text', 'Add to cart') //se valida que cada button "remove" cambie a "add to cart" */
            
            numOfProducts = numOfProducts - 1

            if (numOfProducts === 0) {
                cy.get(the.shoppingCartAlert).should('not.exist')
            } else {
                cy.get(the.shoppingCartAlert).should('have.text',numOfProducts) //se resta -1 en icono del SCP por cada click en "remove"
            }

            cy.get(the.shoppingCartLink).click() //se hace click en el icono del SCP

            cy.get(the.cartItem).should('have.length', numOfProducts) //se valida que se elimina el producto del SCP

            cy.get(the.continueShoppingBtn).click() //se hace click en el button "continue shopping"
        }

    })
})

Cypress.Commands.add("removeCustomProductsSCP", () => {
    cy.fixture("DOM/BotonRemove/RemoveProducts.Page").then((the) => {

        cy.get(the.shoppingCartAlert).should('have.text', numOfProducts) //se valida que haya el numero de productos en el icono de SCP

        cy.get(the.shoppingCartLink).click() //se hace click en el icono del SCP

        cy.get(the.cartItem).should('have.length', numOfProducts) //se valida que la cantidad de productos en el SCP sea la introducida previamente

        for (const indice of listRandom) {
            cy.get(the.buttonRemoveShoppingCart)
                .eq(0)
                .click()//hace click sobre el botón "Remove" de cada uno de los productos previamente añadidos
            
            numOfProducts = numOfProducts - 1

            cy.get(the.cartItem).should('have.length', numOfProducts)//se valida que los productos sean eliminados del SCP
            
            if (numOfProducts === 0) {
                cy.get(the.shoppingCartAlert).should('not.exist') //se valida que cuando no hay ningún producto el alert desaparece del SCP
            } else {
                cy.get(the.shoppingCartAlert).should('have.text', numOfProducts) //se resta -1 en icono del SCP por cada click en "remove"
            }
        }
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

Cypress.Commands.add("addProductToCart", () => {
    cy.get('button.btn_inventory')
            .should('have.length.greaterThan', 0)
            .its('length')
            .then($LengthButton => {
                const RandomNumber = Cypress._.random(0, $LengthButton - 1)
                selectedItem = RandomNumber

                cy.get('button.btn_inventory')
                    .eq(RandomNumber)
                    .click() //Añade un producto random al SCP
            })
})

Cypress.Commands.add("removeProductPLP", () => {
    cy.fixture("DOM/BotonRemove/RemoveProducts.Page").then((the) => {

        cy.get(the.buttonAddToCart)
            .eq(selectedItem)
            .click() //hace click sobre el botón "Remove" del producto previamente añadido

        cy.get(the.buttonShoppingCart)
            .should('not.exist') // se resta -1 en icono del SCP

        cy.get(the.buttonAddToCart)
            .eq(selectedItem)
            .should('have.text', 'Add to cart') // se valida que el button "remove" cambie a "add to cart"
    })
})

Cypress.Commands.add("removeProductPDP", () => {
    cy.fixture("DOM/BotonRemove/RemoveProducts.Page").then((the) => {

        //precondición: usuario se situa en el PDP
        cy.get(the.productItem)
            .eq(selectedItem)
            .click() //Va al PDP del producto seleccionado anteriormente como precondición
            
        cy.url().should("contain", "inventory-item")
            
        //acción
        cy.contains(the.buttonAddToCartPDP, /^Remove/)
            .click() //hace click sobre el botón "Remove"
        
        cy.get(the.buttonShoppingCart)
            .should('not.exist') // se resta -1 en icono del SCP
        
        cy.get(the.buttonAddToCart)
            .should('have.text', 'Add to cart') // se valida que el button "remove" cambie a "add to cart" 
    })
})
Cypress.Commands.add("selectProduct", (productName) => {
    cy.get("div.inventory_item_name").each(($el, index, $list) => {
        if ($el.text().includes(productName))
        {
            cy.get("button.btn.btn_primary.btn_small.btn_inventory").eq(0).click()
            cy.get("a.shopping_cart_link").should('have.length.greaterThan', 0)
            }
    })
})
Cypress.Commands.add("removeProduct", (productName) => {
    cy.get("div.inventory_item_name").each(($el, index, $list) => {
        if ($el.text().includes(productName))
        {
            cy.get("button.btn.btn_secondary.btn_small.cart_button").eq(0).click()
            }
    })
})
//GX-4138: Precondición: Visitar page Login 
Cypress.Commands.add("pageLogin", () => {
    cy.fixture("DOM/swaglabs/GX-4138/login.Page").then((the) => { 
        cy.visit(the.url)  //comando de acción directa
        cy.url().should('contain', 'saucedemo') //deberia de contener 'saucedemo'

    })
})
//GX-4138: Ingresar user valido 
Cypress.Commands.add("loginUserValid", () => {
    cy.fixture("DOM/swaglabs/GX-4138/login.Page").then((the) => {
        cy.get(the.username.input).type(the.username.data.valid.uStandard)
            .should("have.attr", "type", "text")
        cy.get(the.password.input).type(the.password.data.valid)
            .should("have.attr", "type", "password")
        cy.get(the.buttonLogin).click()

    })
})
//GX-4138: Ingresar user bloqueado 
Cypress.Commands.add("loginUserLocked", () => {
    cy.fixture("DOM/swaglabs/GX-4138/login.Page").then((the) => {
        cy.get(the.username.input).type(the.username.data.locked)
            .should("have.attr", "type", "text")
        cy.get(the.password.input).type(the.password.data.valid)
            .should("have.attr", "type", "password")
        cy.get(the.buttonLogin).click() 
        
    })
})
//GX-4138: Ingresar user Incorrect
Cypress.Commands.add("loginUserIncorrect", () => {
    cy.fixture("DOM/swaglabs/GX-4138/login.Page").then((the) => {
        cy.get(the.username.input).type(the.username.data.invalid.userIncorrect)
            .should("have.attr", "type", "text")
        cy.get(the.password.input).type(the.password.data.invalid.passIncorrect)
            .should("have.attr", "type", "password")
        cy.get(the.buttonLogin).click() 
    
    })
})
//GX-4138: Ingresar user Inexistente
Cypress.Commands.add("loginUserNonExistent", () => {
    cy.fixture("DOM/swaglabs/GX-4138/login.Page").then((the) => {
        cy.get(the.username.input).clear().type(the.username.data.invalid.userNonExistent)
            .should("have.attr", "type", "text")
        cy.get(the.password.input).clear().type(the.password.data.invalid.passNonExistent)
            .should("have.attr", "type", "password")
        cy.get(the.buttonLogin).click() 
        
    })
})
//GX-4138: Ingresar user con campos vacios
Cypress.Commands.add("loginUserEmptyFields", () => {
    cy.fixture("DOM/swaglabs/GX-4138/login.Page").then((the) => {
    cy.get(the.username.input).click()
        .should("have.attr", "type", "text")
    cy.get(the.password.input).click()
        .should("have.attr", "type", "password")
    cy.get(the.buttonLogin).click() 
    
    })
})
//GX-4138: Visitar un Endpoint
Cypress.Commands.add("gotoEndpoint", (url) => {
    cy.visit(url, {failOnStatusCode: false})
})
Cypress.Commands.add("assertEndpoint", () => {
    cy.get("h3[data-test='error']").should("contain", "when you are logged in.")
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