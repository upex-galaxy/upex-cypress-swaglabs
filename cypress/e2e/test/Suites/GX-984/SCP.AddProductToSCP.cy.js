/// <reference types="cypress" />

const loginPage = require("../../../pages/SwagLabs/loginPage");
const productListPage = require("../../../pages/SwagLabs/productListPage");

describe("US GX-984 | SwagLabs | SCP | Agregar producto al carrito de compras desde el PLP o PDP", () => {
    
    let the;
    before("Load Data", () => {
        cy.fixture("DOM/SCP/AddProductToSCP.json").then((data) => {
            the = data
        })
    })

    beforeEach("Precondiciones: El usuario debe haber iniciado sesion y el SCP debe de estar vacio", () => {
        cy.visit(the.url)
        cy.url().should("contain", "https://www.saucedemo.com")
        //Iniciar Session
        loginPage.typeUsername(the.username)
        loginPage.typePassword(the.password)
        loginPage.elements.login_button().click()
        cy.url().should("contain", "inventory")
        // Validar que el SCP este vacio
        productListPage.elements.shippingCartItems().should("not.exist")
    })

    it.only("US GX-984 | TS: GX-985 | TC1:  Validar agregar un producto al SCP desde el PLP", () => {
           //Validar agregar un producto al Shopping Cart
            productListPage.elements.productList().eq(1).within(() => {
            //Guardar el elemento que contiene el titulo del producto
            productListPage.elements.productTitle().as("productTitle")
            //Guardar el elemento que contiene el precio del producto
            productListPage.elements.productPrice().as("productPrice")
            //Guardar el elemento que contiene la descripcion del producto
            productListPage.elements.productDescription().as("productDescription")
            //Hacer click al boton "Add to cart"
            productListPage.elements.addToCart_buttonList().click()
            //Validar que el boton "Add to cart" cambie a "Remove"
            productListPage.elements.remove_buttonList().should("have.length", 1).and("contain.text", "Remove")
        })
        //Validar que el Carrito de compras contenga 1 producto
        productListPage.elements.shippingCartItems().then((element) => { 
            expect(parseInt(element.text())).to.equal(1)
        })
        //Click al Shopping Cart
        productListPage.elements.shoppingCart_link().click()
        cy.url().should("contain","/cart")
        //Validar caracteristicas del producto previamente agregado
        cy.get("@productTitle").should("contain", "Sauce Labs Bike Light")
        cy.get("@productPrice").should("contain", "$9.99")
        cy.get("@productDescription").should("contain","A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.")
    
    })

    it("US GX-984 | TS: GX-985 | TC2: Validar agregar un producto al SCP desde el PDP", () => {
    
    })

    it("US GX-984 | TS: GX-985 | TC3: Validar agregar 2 productos al SCP 1 desde el PLP y el otro desde el PDP", () => {
        
    })

    it("US GX-984 | TS: GX-985 | TC4: Validar agregar 2 productos al SCP desde el PLP", () => {
        
    })

    it("US GX-984 | TS: GX-985 | TC5: Validar agregar 2 productos al SCP desde el PDP", () => {
        
    })

    it("US GX-984 | TS: GX-985 | TC6: Validar agregar todos los productos al SCP desde el PLP", () => {
        
    })
})

//________________________________________________________________________
// Comando predeterminado para que no ocurran errores de excepciones:
Cypress.on('uncaught:exception', (err, runnable) => {
	// returning false here prevents Cypress from
	// failing the test
	return false
})
// Comando predeterminado para que no aparezcan los Fetch en el log del Test Runner:
const origLog = Cypress.log
Cypress.log = function (opts, ...other) {
	if (opts.displayName === 'xhr'|| opts.displayName === 'fetch' && opts.url.startsWith('https://')) {
		return
	}
	return origLog(opts, ...other)
}

// ** COPIA Y PEGA EN CADA SUITE QUE SE REALICE CON UN SUT DE MUCHO FETCH Y XHR O PROBLEMAS DE EXCEPCIÓN 