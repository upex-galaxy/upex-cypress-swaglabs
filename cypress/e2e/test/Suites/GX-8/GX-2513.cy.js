/// <reference types="cypress" />

import {CartPage} from "../../../../support/Pages/CartPage";
import {CheckoutPage} from "../../../../support/Pages/CheckoutPage";
import {HomePage} from "../../../../support/Pages/HomePage";
import {ProductsPage} from "../../../../support/Pages/ProductsPage";

describe('GX-2513 ✅SwagLabs | Checkout | Finalizar o Cancelar la compra de un producto en la Website',()=>{
    let info;
    const user= "standard_user";
    const pass = "secret_sauce";
    const homepage = new HomePage();
    const productspage = new ProductsPage();
    const cartpage = new CartPage();
    const checkoutpage = new CheckoutPage();

    beforeEach(()=>{
        
        cy.fixture("DOM/GX-2513/GX-2513-purchase-information").then(information => {
            info = information;
        })
        cy.visit('');
        homepage.InputUser(user);
        homepage.InputPass(pass);
        homepage.LoginButton();
        
    })

    it('2514 | TC1: Validar que el usuario finaliza la compra de un producto   ', () => {

        productspage.selectBackpack();
        productspage.clickShoppingcart();
        
        cartpage.GotoCheckout();

        checkoutpage.InputName(info.name);
        checkoutpage.InputSurname(info.lastname);
        checkoutpage.InputZip(info.zip);
        checkoutpage.Continue();
        checkoutpage.finishButton()
            .should('exist').click()
        checkoutpage.Header()
            .should(text => {
                expect(text).contain('THANK YOU FOR YOUR ORDER');
            })
        checkoutpage.Text()
            .invoke('text')
            .should(text => {
                assert.include(text, "Your order has been dispatched, and will arrive just as fast as the pony can get there!");
        })
        
    })

    it('2514 | TC2: Validar que el usuario cancela la compra de un producto', () => {
        productspage.selectBackpack();
        productspage.clickShoppingcart();
        
        cartpage.GotoCheckout();

        checkoutpage.InputName(info.name);
        checkoutpage.InputSurname(info.lastname);
        checkoutpage.InputZip(info.zip);
        checkoutpage.Continue();
        checkoutpage.cancelButton()
            .should('exist')
            .click();
    })
})