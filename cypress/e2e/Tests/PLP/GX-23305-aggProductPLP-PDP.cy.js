describe('23305 | ✅SwagLabs | SCP | Agregar producto al carrito de compras desde el PLP o PDP', () =>
{
    beforeEach('Usuario ha iniciado sesión y no ha sido agregado el producto al SCP', () => {
        cy.fixture('data/GX-23305-aggProductPLP-PDP.json',).then((the) => {
            cy.visit('https://www.saucedemo.com/');
            cy.url().should('eq', 'https://www.saucedemo.com/')
            addToCart.enterUsername(the.data.username);
            addToCart.enterPassword(the.data.password);
            addToCart.get.submitBtn().click()
        })
    })
    it('23306 | TC1: Validar agregar desde el PLP un artículo al shopping cart.', () => {
        // Selects a random item and adds to cart
        addToCart.selectRandomItem().then(indexselected => {
            cy.wrap(indexselected).as('index');
        })

        // ------------------------------Results expected---------------------------------------------------

        // checks if button was changed
        cy.get('@index').then((index) => {
            addToCart.get.addToCartItemBtn().eq(index).should('have.text', 'Remove');
        })
        // Checks if was added one to the shopping cart icon
        addToCart.get.shoppingCartBadge().invoke('text').then(cantidad => {
            
            quantity = parseInt(cantidad);
            expect(quantity).to.equal(1);
        })
        //
        cy.get('@index').then((index) => {
            addToCart.get.inventoryItemName().eq(index).invoke('text').then(itemName => {
                cy.wrap(itemName).as('itemNameToCompare');
            })
            addToCart.get.inventoryItemDesc().eq(index).invoke('text').then(itemDescription => {
                cy.wrap(itemDescription).as('itemDescriptionToCompare');
            })
            addToCart.get.inventoryItemPrice().eq(index).invoke('text').then(itemPrice => {
                cy.wrap(itemPrice).as('itemPriceToCompare');
            })
        })
        // click Shopping Cart Button
        addToCart.get.shoppingCartBtn().click()
        
        // checks if the characteristics are match
        cy.get('@itemNameToCompare').then((itemNameToCompare) => {
            addToCart.get.inventoryItemName().should('have.text', itemNameToCompare);
        })
        cy.get('@itemDescriptionToCompare').then((itemDescriptionToCompare) => {
            addToCart.get.inventoryItemDesc().should('have.text', itemDescriptionToCompare);
        })
        cy.get('@itemPriceToCompare').then((itemPriceToCompare) => {
            addToCart.get.inventoryItemPrice().should('have.text', itemPriceToCompare);
        })
    })
    it('23306 | TC2: Validar agregar desde el PDP un artículo al shopping cart.', () => {
        // goes to PDP with Random item
        addToCart.selectRandomItemName();
        //
        addToCart.get.addToCartItemBtn().click();
        // checks if button was changed
        addToCart.get.addToCartItemBtn().should('have.text', 'Remove');
        // Checks if was added one to the shopping cart icon
        addToCart.get.shoppingCartBadge().invoke('text').then(cantidad => {
            
            quantity = parseInt(cantidad);
            expect(quantity).to.equal(1);
        })
        // wraping variables
        addToCart.get.inventoryDetailsName().invoke('text').then(itemName => {
            cy.wrap(itemName).as('itemNameToCompare');
        })
        addToCart.get.inventoryDetailsDesc().invoke('text').then(itemDescription => {
            cy.wrap(itemDescription).as('itemDescriptionToCompare');
        })
        addToCart.get.inventoryDetailsPrice().invoke('text').then(itemPrice => {
            cy.wrap(itemPrice).as('itemPriceToCompare');
        })
        // click Shopping Cart Button
        addToCart.get.shoppingCartBtn().click()

        // checks if the characteristics are match
        cy.get('@itemNameToCompare').then((itemNameToCompare) => {
            addToCart.get.inventoryItemName().should('have.text', itemNameToCompare);
        })
        cy.get('@itemDescriptionToCompare').then((itemDescriptionToCompare) => {
            addToCart.get.inventoryItemDesc().should('have.text', itemDescriptionToCompare);
        })
        cy.get('@itemPriceToCompare').then((itemPriceToCompare) => {
            addToCart.get.inventoryItemPrice().should('have.text', itemPriceToCompare);
        })

    })
    
})
import { addToCart } from "@pages/GX-23305-aggProductPLP-PDP.Page";