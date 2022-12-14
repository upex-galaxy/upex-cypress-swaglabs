describe("US GX-4138 | TS: ✅SwagLabs | Account | Iniciar sesión y BR de Accesos", () =>
{
    beforeEach("Precondition: Usuario debe estar situado en la página de Login", () => {

        cy.pageLogin()

    })
    it("4139 | TC1:  Validar que usuario inicie sesión correctamente.", () => {

        cy.loginUserValid() //con datos validos.

    })
    it("4139 | TC2:  Validar que usuario intenta inicie sesión con cuenta bloqueada.", () => {
        
        cy.loginUserLocked() //con datos de user bloqueado
        cy.contains("Epic sadface: Sorry, this user has been locked out").should("be.visible")  

    })
    it("4139 | TC3:  Validar que usuario intenta sesión con un cuenta incorrecta o inexistente.", () => {

        cy.loginUserIncorrect() //con valores incorrectos
        cy.loginUserNonExistent() //con valores inexistentes
        cy.contains("Epic sadface: Username and password do not match any user in this service").should("be.visible") 
        
    })
    it("4139 | TC4:  Validar que usuario intenta iniciar sesión dejando campos vacíos en el formulario.", () => {

        cy.loginUserEmptyFields() //con valores vacios
        cy.contains("Epic sadface: Username is required").should("be.visible") //cuando ambos son vacios, toma prioridad username.

    })
it("4139 | TC5: Validar que usuario intenta ingresar a un EndPoint de la website sin haber iniciado sesión.", () => {

    cy.gotoEndpoint("/inventory.html")
    cy.assertEndpoint()

    cy.gotoEndpoint("/cart.html")
    cy.assertEndpoint()

    cy.gotoEndpoint("/checkout-step-one.html")
    cy.assertEndpoint()

    cy.gotoEndpoint("/checkout-step-two.html")
    cy.assertEndpoint()

    cy.gotoEndpoint("/checkout-complete.html")
    cy.assertEndpoint()
    
    })
    after(() => {
        cy.clearLocalStorage() //para limpiar datos
        cy.clearCookies() //para limpiar
    })
})