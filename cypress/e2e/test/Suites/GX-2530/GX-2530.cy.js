/// <reference types="cypress" />

import { HomePage } from "../../../../support/Pages/HomePage";
import { ProductsPage } from "../../../../support/Pages/ProductListPage";

describe('GX-2530 | TS: ✅📜PDP | Category Search | Buscar productos por Filtros de categoría en el PDP', () => {
    const user= "standard_user";
    const pass = "secret_sauce";
    const homepage = new HomePage();
    const productspage = new ProductsPage();

    before(() => {
        cy.visit('');
        homepage.InputUser(user);
        homepage.InputPass(pass);
        homepage.LoginButton();
        cy.fixture("DOM/SCP/.Page").then(information => {
            info = information;
        })
    })
    it('GX-2535 | TC1: Validar que el usuario busque los items por categoría de la tienda', () => {
        productspage.dropdownZA();
    })

})