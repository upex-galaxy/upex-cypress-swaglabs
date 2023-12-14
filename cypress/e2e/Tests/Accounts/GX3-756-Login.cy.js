import { removeLogs } from "@helper/RemoveLogs";
import data from '../../../fixtures/data/GX3-756-Login.json';
removeLogs()

describe(" GX3-756 [Automation] SwagLabs | Account | Iniciar sesión y BR de Accesos", ()=> {
    beforeEach('Usuario debe estar en la página de Login', ()=> {
        cy.visit('https://www.saucedemo.com/')
        cy.url().should('contain','demo')
    }) 
    const testCases= data.testCases;
    const endpoints = data.endpoints;
    it('GX3-756 | TC1: Validar iniciar sesión correctamente', () => {
        cy.get('#user-name').type(data.validUserName)
        cy.get('#password').type(data.validPassword)
        cy.get('#login-button').click()
           
    });
   
          //Test Cases login
           testCases.forEach((testCase, i) => {
                it(`GX3-756 | TC${i + 2}: ${testCase.testTitle}`, () => {
                    if (testCase.username !== null && testCase.username !== undefined) {
                      cy.get('#user-name').type(testCase.username);
                    }
                    if (testCase.password !== null && testCase.password !== undefined) {
                      cy.get('#password').type(testCase.password);
                    }
                    cy.get('#login-button').click();
                    cy.get('[data-test="error"]').should('have.text', testCase.errorMessage);
                });
              }); 
              //Test Cases Endpoints
              endpoints.forEach((endpoint, i) => {
              it(`GX3-756 | TC${i + 8}: ${endpoint.endpointTitle}`, () => {
                cy.visit(endpoint.url, { failOnStatusCode: false })
                console.log(endpoint.url);
                cy.get('[data-test="error"]').should('have.text', endpoint.endpointMessage);

              });
            })
})
