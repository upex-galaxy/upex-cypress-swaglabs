/// <reference types="cypress" />

import { CartPage } from "../../../../support/Pages/CartPage";
import { HomePage } from "../../../../support/Pages/HomePage"
import { ProductsPage } from "../../../../support/Pages/ProductsPage";

describe('GX-2529 ✅SwagLabs | SCP | Agregar producto al carrito de compras desde el PLP o PDP', () => {
    let info;
    const user= "standard_user";
    const pass = "secret_sauce";
    const homepage = new HomePage();
    const productspage = new ProductsPage();
    const cartpage = new CartPage();


    beforeEach(() => {
        cy.visit('');
        homepage.InputUser(user);
        homepage.InputPass(pass);
        homepage.LoginButton();
        cy.fixture("DOM/SCP/.Page").then(information => {
            info = information;
        })
    })

    it('2531 | TC1: Valida que el usuario añade un producto del PLP al Shopping-Cart exitosamente', () => {
        productspage.addtocartbutton();
        productspage.clickShoppingcart();
        cartpage.BackpackPrice()
            .should('include.text', info.packprice);

    })

    it('2531 | TC2: Validar que el usuario añade un producto del PDP al Shopping-Cart exitosamente', () => {
        productspage.GotobackPack()
        productspage.addtocartbutton();
        productspage.clickShoppingcart();

        cartpage.BackpackPrice()
            .should('include.text', info.packprice)
    })
})