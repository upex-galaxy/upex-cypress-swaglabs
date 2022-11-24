/// <reference types="cypress" />

import {ProductCartPage} from "../../../../support/Pages/GX-2513/ProductCartPage";
import {CheckoutPage} from "../../../../support/Pages/GX-2513/CheckoutPage";
import {HomePage} from "../../../../support/Pages/GX-2513/HomePage";
import {ProductsListPage} from "../../../../support/Pages/GX-2513/ProductsListPage";


describe('GX-2513 ✅SwagLabs | Checkout | Finalizar o Cancelar la compra de un producto en la Website',()=>{
    let info;
    let productinfo;
    const user= "standard_user";
    const pass = "secret_sauce";
    const homepage = new HomePage();
    const productslistpage = new ProductsListPage();
    const productcartpage = new ProductCartPage();
    const checkoutpage = new CheckoutPage();

    beforeEach(()=>{
        
        cy.fixture("DOM/GX-2513/GX-2513-purchase-information").then(information => {
            info = information;
        })
        cy.fixture('DOM/GX-2513/product-information').then(information => {
            productinfo = information;
        })
        cy.visit('');
        homepage.InputUser(user);
        homepage.InputPass(pass);
        homepage.LoginButton();
        
    })

    it('2514 | TC1: Validar que el usuario finaliza la compra de un producto',() => {

        productslistpage.addProductocart(productinfo.productID);
        productslistpage.GotoShoppingcart();
        
        productcartpage.GotoCheckout();

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
        productslistpage.addProductocart(productinfo.productID);
        productslistpage.GotoShoppingcart();
        
        productcartpage.GotoCheckout();

        checkoutpage.InputName(info.name);
        checkoutpage.InputSurname(info.lastname);
        checkoutpage.InputZip(info.zip);
        checkoutpage.Continue();
        checkoutpage.cancelButton()
            .should('exist')
            .click();
        productslistpage.Checktitle()
            .should('have.text', "Products");
    })
})