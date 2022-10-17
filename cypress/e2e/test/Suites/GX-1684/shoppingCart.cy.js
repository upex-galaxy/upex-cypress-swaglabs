describe('US GX-1684 | TS: ✅SwagLabs | SCP PLP | Retornar desde SCP a la sección de inventario (PLP)', () => {
    let ACdata;
    let PLPdata;
    let SCdata;

    before('Precondición - Estar logueado', () => {

        cy.fixture('DOM/Account/Account.Page.json').then(ACData => { ACdata = ACData });
        cy.fixture('DOM/PLP/productList.Page.json').then(PDdata => { PLPdata = PDdata });
        cy.fixture('DOM/SCP/shoppingCart.Page.json').then(SCData => { SCdata = SCData });
    });

    it.only('US 1684 | TS 1685 | TC1: Comprobar y verificar el correcto funcionamiento del botón Continue Shopping.', () => {

        cy.viewport(1920, 1080);
        cy.visit('');
        cy.get(ACdata.input.username).type(ACdata.data.user);
        cy.get(ACdata.input.password).type(ACdata.data.password);
        cy.get(ACdata.submitButton).click();
        cy.get(PLPdata.inputAddtoCart.Backpack).click();
        cy.get(SCdata.input.goToShoppingCart).click();
        cy.url().should('contain', 'cart.html');
        cy.get(SCdata.input.goToShoppingCart).click();
        cy.get(SCdata.input.continueShopping).click();
        cy.url().should('contain', 'inventory.html');
    });
});