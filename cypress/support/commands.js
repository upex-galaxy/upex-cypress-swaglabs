// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
import 'cypress-file-upload'
import 'cypress-wait-until'
import '@4tw/cypress-drag-drop'
import 'cypress-downloadfile/lib/downloadFileCommand'
import { Login } from '@pages/loginFranco.Page'
import {login} from '@pages/Login.Page'
const {authLogin, dashboardIndex} = Cypress.env('endpoint')
const {endpoint} = Cypress.env('swagLabs')
import {signin} from '@pages/SignIn.Page.js'



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

Cypress.Commands.add('SL',(username,password)=>{
    cy.session('Login',()=>{
        cy.visit(baseURL)
        // cy.url().should("contain", "saucedemo")
        username && Login.enterUsername(username)
        password && Login.enterPassword(password)
        Login.submitButton()

        cy.url().should("contain", endpoint.inventory)
        
    })
})


Cypress.Commands.add('SignIn', ()=>{
    const { username, password } = Cypress.env('user')
    const { signUp } = Cypress.env('endpoint')
    cy.session('signIn',()=>{
        cy.visit(signUp)
        signin.goToLoginTab()
        signin.enterUsername(username)
        signin.enterPassword(password)
        signin.submitLogin()
    })
})


