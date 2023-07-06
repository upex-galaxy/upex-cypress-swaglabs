describe('23305 | ✅SwagLabs | SCP | Agregar producto al carrito de compras desde el PLP o PDP'), () =>
{
    beforeEach('Usuario ha iniciado sesión y no ha sido agregado el producto al SCP', () => 
    {
        cy.fixture('data/GX-23305-aggProductPLP-PDP.json',).then((the) => {
            cy.visit('https://www.saucedemo.com/');
            cy.url().should('eq', 'https://www.saucedemo.com/')
            ATC.get.usernameInput(the.data.username);
            ATC.get.passwordInput(the.data.password);
            ATC.get.submitBtn().click()
        })
        

    })
    
}
import { ATC } from "@pages/GX-23305-aggProductPLP-PDP.Page";