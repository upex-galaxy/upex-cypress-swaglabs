/// <reference types="cypress" />

import { ShoppingCartPage } from "../../../../support/Pages/ShoppingCartPage";
import { HomePage } from "../../../../support/Pages/HomePage"
import { ProductDetailedPage } from "../../../../support/Pages/ProductDetailedPage";
import { ProductListPage } from "../../../../support/Pages/ProductListPage";

describe('GX-2529 ✅SwagLabs | SCP | Agregar producto al carrito de compras desde el PLP o PDP', () => {
    let info;
    const user= "standard_user";
    const pass = "secret_sauce";
    const homepage = new HomePage();
    const productlistpage = new ProductListPage();
    const shoppingcartpage = new ShoppingCartPage();
    const productdetailedpage = new ProductDetailedPage();


    beforeEach(() => {
        cy.visit('');
        homepage.InputUser(user);
        homepage.InputPass(pass);
        homepage.LoginButton();
        cy.fixture("/DOM/GX-2529/product-information.json").then(information => {
            info = information;
        })
    })

    it('2531 | TC1: Valida que el usuario añade un producto del PLP al Shopping-Cart exitosamente', () => {
        productdetailedpage.addProductocart(info.productID);
        productdetailedpage.gotoShoppingcart();
        productdetailedpage.checkDescription(info.description)
            .should('have.text', "A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.")
        productdetailedpage.checkPrice(info.price)
            .should('include.text', '9.99');
        productdetailedpage.checkProduct(info.productname)
            .should('have.text', "Sauce Labs Bike Light");
    });

    it('2531 | TC2: Validar que el usuario añade un producto del PDP al Shopping-Cart exitosamente', () => {
        productlistpage.GotoProduct(info.productname);
        productdetailedpage.addProductocart(info.productID);
        productdetailedpage.gotoShoppingcart();
        productdetailedpage.checkDescription(info.description)
            .should('have.text', "A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.")
        productdetailedpage.checkPrice(info.price)
            .should('include.text', '9.99');
        productdetailedpage.checkProduct(info.productname)
            .should('have.text', "Sauce Labs Bike Light");
    })
})