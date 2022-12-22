/// <reference types="cypress" />

import { ProductDetailedPage } from "../../../../support/Pages/AcademyBugs/ProductDetailedPage";
import { ProductListPage } from "../../../../support/Pages/AcademyBugs/ProductListPage";

describe('GX-2530 ✅📜PDP | Category Search | Buscar productos por Filtros de categoría en el PDP', () => {
    let info;
    const productlistpage = new ProductListPage;
    const productdetailedpage = new ProductDetailedPage

    before(() => {
        cy.fixture("DOM/GX-2530/information").then(data => {
            info = data;
        })
        cy.viewport(1920, 1080)
        cy.visit('https://academybugs.com/find-bugs/');
    })
    it('2535 | TC1: Valida que el usuario busque los items por categoría de la tienda', () => {
        productlistpage.selectProduct(info.productname);
        productdetailedpage.ClickonAccesories();
        productdetailedpage.Checkmenu().should('exist');
        productdetailedpage.ClickonHandbagpurse();
        productdetailedpage.ClickonFashiontype();
        productdetailedpage.Checkmenu2()
            .should('exist')
            .click();

    })
})