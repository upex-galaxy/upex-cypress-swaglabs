// importar login Miguel
import {Login} from '@pages/LoginMigue.Page.js'

// crear constantes global del enviroment 
const {login, endpoint, errorMessage} = Cypress.env('swagLabs')
const  {baseUrl} = Cypress.env()


describe("✅SwagLabs | Account | Iniciar sesión y BR de Accesos", () => 
{
  beforeEach("Precondicion: Usurio debe estar situado en la página de Login", () => {
    cy.visit(baseUrl)
    cy.url().should('contain', 'saucedemo')
  })

  it("6501 | TC1:  Validar iniciar sesión exitosamente cuando “Username“ es standard_user y “Password“ secret_sauce.", () => {
      Login.enterInputUsername(login.user.standarUser)
      Login.enterInputPassword(login.user.secretSauce)
      Login.enterSubmitButton('#login-button')
      cy.url().should('contain', endpoint.inventory)
      
  })

  it("6501 | TC2:  Validar NO poder iniciar sesión exitosamente cuando “Username“ es locked_out_user y “Password“ secret_sauce.", () => {
    cy.get("[type = 'text']").type("locked_out_user")
    cy.get("[type = 'password']").type("secret_sauce")
    cy.get("#login-button")
    cy.contains("Login").click()
    cy.get("[data-test = 'error']")
    cy.contains("Epic sadface: Sorry, this user has been locked out.").should("be.visible")
})

it("6501 | TC3:  Validar NO poder iniciar sesión exitosamente cuando “Username“ es problem_user y “Password“ secret_sauce.", () => {
    cy.get("[type = 'text']").type("problem_user")
    cy.get("[type = 'password']").type("secret_sauce")
    cy.get("#login-button")
    cy.contains("Login").click()
    cy.url("https://www.saucedemo.com/inventory.html").should("contain", "inventory")
})

it("6501 | TC4:  Validar NO poder iniciar sesión exitosamente cuando “Username“ es performance_glitch_user y “Password“ secret_sauce.", () => {
    cy.get("[type = 'text']").type("performance_glitch_user")
    cy.get("[type = 'password']").type("secret_sauce")
    cy.get("#login-button")
    cy.contains("Login").click()
    cy.url("https://www.saucedemo.com/inventory.html").should("contain", "inventory")
})

it("6501 | TC5:  Validar NO poder iniciar sesión cuando el “Username“ es standard_user y “Password“ es inválido.", () => {
    cy.get("[type = 'text']").type("standard_user")
    cy.get("[type = 'password']").type("1234asdfg")
    cy.contains("Login").click()
    cy.get("[data-test = 'error']")
    cy.contains("Epic sadface: Username and password do not match any user in this service").should("be.visible")
})

it("6501 | TC6:  Validar NO poder iniciar sesión cuando el “Username“ es inválido y “Password“ secret_sauce.", () => {
    cy.get("[type = 'text']").type("invalid_user")
    cy.get("[type = 'password']").type("secret_sauce")
    cy.contains("Login").click()
    cy.get("[data-test = 'error']")
    cy.contains("Epic sadface: Username and password do not match any user in this service").should("be.visible")
})
  
it("6501 | TC7:  Validar NO poder iniciar sesión cuando el “Username“ es problem_user y “Password“ Null.", () => {
    cy.get("[type = 'text']").type("problem_user")
    cy.get("[type = 'password']")
    .clear()
    .should("have.value", "")
    cy.get("#login-button")
    cy.contains("Login").click()
    cy.get("[data-test = 'error']")
    cy.contains("Epic sadface: Password is required").should("be.visible")
})

it("6501 | TC8:  Validar NO poder iniciar sesión cuando el “Username“ es Null y “Password“ secret_sauce.", () => {
    cy.get("[type = 'text']")
    .clear()
    .should("have.value", "")
    cy.get("[type = 'password']").type("secret_sauce")
    cy.get("#login-button")
    cy.contains("Login").click()
    cy.get("[data-test = 'error']")
    cy.contains("Epic sadface: Username is required").should("be.visible")
})

it("6501 | TC9:  Validar NO poder iniciar sesión cuando el “Username“ es Null y “Password“ es Null.", () => {
    cy.get("[type = 'text']")
    .clear()
    .should("have.value", "")
    cy.get("[type = 'password']")
    .clear()
    .should("have.value", "")
    cy.contains("Login").click()
    cy.get("[data-test = 'error']")
    cy.contains("Epic sadface: Username is required").should("be.visible")
})

it("6501 | TC10:  Validar NO poder iniciar sesión cuando el usuario ingresa al endpoint /inventory.html", () => {
  cy.visit("https://www.saucedemo.com/inventory.html", {failOnStatusCode: false})
  cy.get("[data-test = 'error']").should('contain', "Epic sadface: You can only access '/inventory.html' when you are logged in.")
})

it("6501 | TC11: Validar NO poder iniciar sesión cuando el usuario ingresa al endpoint /cart.html", () => {
  cy.visit("https://www.saucedemo.com/cart.html", {failOnStatusCode: false})
  cy.get("[data-test = 'error']").should('contain', "Epic sadface: You can only access '/cart.html' when you are logged in.")
})

it("6501 | TC12: Validar NO poder iniciar sesión cuando el usuario ingresa al endpoint /checkout-step-one.html", () => {
  cy.visit("https://www.saucedemo.com/checkout-step-one.html", {failOnStatusCode: false})
  cy.get("[data-test = 'error']").should('contain', "Epic sadface: You can only access '/checkout-step-one.html' when you are logged in.")
})

it("6501 | TC13: Validar NO poder iniciar sesión cuando el usuario ingresa al endpoint /checkout-step-two.html", () => {
  cy.visit("https://www.saucedemo.com/checkout-step-two.html", {failOnStatusCode: false})
  cy.get("[data-test = 'error']").should('contain', "Epic sadface: You can only access '/checkout-step-two.html' when you are logged in.")
})

it("6501 | TC14: Validar NO poder iniciar sesión cuando el usuario ingresa al endpoint /checkout-complete.html", () => {
  cy.visit("https://www.saucedemo.com/checkout-complete.html", {failOnStatusCode: false})
  cy.get("[data-test = 'error']").should('contain', "Epic sadface: You can only access '/checkout-complete.html' when you are logged in.")
})

})