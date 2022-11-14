describe('US GX-1708 | TS: ✅SwagLabs | Checkout | Finalizar o Cancelar la compra de un producto en la Website', () => {
    
  beforeEach('Precondición:el usuario debe loguearse exitosamente', () => {
    cy.visit("https://www.saucedemo.com/")
      // cy.contains("Login").should("be.visible")
    cy.fixture("DOM/GX-1708/session").then((the) => {
      cy.get(the.input.username).type(the.data.user) 
      cy.get(the.input.password).type(the.data.password) 
      cy.get(the.submitButton).click()
    })
  })
  it('US GX-1708 | TS 1709 | TC1:Validar que el usuario pueda finalizar una compra de un producto en la Website', () => {
    cy.fixture("DOM/GX-1708/Plp").then((the) => {
      cy.get(the.product1.image).click()
      cy.get(the.product1.buttonAdd).click()
      cy.get(the.shoppingCart).click()
      cy.contains('Your Cart').should("be.visible")
      //cy.contains('Sauce Labs Backpack').should("be.visible") // como mejorar esto quiero probar si el producto es el que elegi
      cy.get(the.checkout).click()
      cy.get(the.firstName).type("Noelia")
      cy.get(the.lastName).type("Lefipan")
      cy.get(the.postalCode).type("9100")
      cy.get(the.buttonContinue).click()
      cy.get(the.buttonFinish).click()
      cy.contains('Complete').should("be.visible")
    })
  })
  it('US GX-1708 | TS 1709 | TC2:Validar que el usuario pueda finalizar una compra de dos productos en la Website', () => {
    cy.fixture("DOM/GX-1708/Plp").then((the) => {
      cy.get(the.product1.image).click()
      cy.get(the.product1.buttonAdd).click()
      cy.get(the.buttonBackToProduct).click()
      cy.get(the.product2.image).click()
      cy.get(the.product2.buttonAdd).click()
      cy.get(the.shoppingCart).click()
      cy.contains('Your Cart').should("be.visible")
      cy.contains('Sauce Labs Bike Light').should("be.visible") // como mejorar esto quiero probar si el producto es el que elegi
      cy.get(the.checkout).click()
      cy.get(the.firstName).type("Noelia")
      cy.get(the.lastName).type("Lefipan")
      cy.get(the.postalCode).type("9100")
      cy.get(the.buttonContinue).click()
      cy.get(the.buttonFinish).click()
      cy.contains('Complete').should("be.visible")
    })
  })
  it('US GX-1708 | TS 1709 | TC3:Validar que el usuario pueda finalizar una compra de todos los productos en la Website', () => {
    cy.fixture("DOM/GX-1708/Plp").then((the) => {
      cy.get(the.product1.image).click()
      cy.get(the.product1.buttonAdd).click()
      cy.get(the.buttonBackToProduct).click()
      
      cy.get(the.product2.image).click()
      cy.get(the.product2.buttonAdd).click()
      cy.get(the.buttonBackToProduct).click()
      
      cy.get(the.product3.image).click()
      cy.get(the.product3.buttonAdd).click()
      cy.get(the.buttonBackToProduct).click()
      
      cy.get(the.product4.image).click()
      cy.get(the.product4.buttonAdd).click()
      cy.get(the.buttonBackToProduct).click()

      cy.get(the.product5.image).click()
      cy.get(the.product5.buttonAdd).click()
      cy.get(the.buttonBackToProduct).click()

      cy.get(the.product6.image).click()
      cy.get(the.product6.buttonAdd).click()
      cy.get(the.buttonBackToProduct).click()

      cy.get(the.shoppingCart).click()

      cy.contains('Your Cart').should("be.visible")
      cy.contains('Sauce Labs Backpack').should("be.visible") // como mejorar esto quiero probar si el producto es el que elegi
      cy.get(the.checkout).click()
      cy.get(the.firstName).type("Noelia")
      cy.get(the.lastName).type("Lefipan")
      cy.get(the.postalCode).type("9100")
      cy.get(the.buttonContinue).click()
      cy.get(the.buttonFinish).click()
      cy.contains('Complete').should("be.visible")
    })
  })
  it('US GX-1708 | TS 1709 | TC4: Validar que el usuario pueda cancelar una compra exitosamente y volver al PLP.', () => {
    cy.fixture("DOM/GX-1708/Plp").then((the) => {
      cy.get(the.product1.image).click()
      cy.get(the.product1.buttonAdd).click()
      cy.get(the.shoppingCart).click()
      cy.contains('Your Cart').should("be.visible")
      
      cy.get('.cart_list > .cart_item') //hay productos
      cy.contains('Sauce Labs Bike Light').should("be.visible") // como mejorar esto quiero probar si el producto es el que elegi
      cy.get(the.checkout).click()
      cy.get(the.buttonCancel).click()
     // cy.get(the.buttonRemove).click()
      cy.get('.cart_item').should("exist")//No hay productos
      cy.get(the.buttonContShop).click()

    })
  })
  it('US GX-1708 | TS 1709 | TC5: Validar que el usuario  añadió un producto al carrito, cancelar la compra exitosamente y el carrito quede vacio.', () => {
    cy.fixture("DOM/GX-1708/Plp").then((the) => {
      cy.get(the.product1.image).click()
      cy.get(the.product1.buttonAdd).click()
      cy.get(the.shoppingCart).click()
      cy.contains('Your Cart').should("be.visible")
      
      cy.get('.cart_list > .cart_item') //hay productos
      cy.contains('Sauce Labs Bike Light').should("be.visible") // como mejorar esto quiero probar si el producto es el que elegi
      cy.get(the.checkout).click()
      cy.get(the.buttonCancel).click()
      cy.get(the.buttonRemove).click()
      cy.get('.cart_item').should("not.exist")//No hay productos
    })
  })

  it('US GX-1708 | TS 1709 | TC6: Validar que el usuario realizar una comprar de varios producto y eliminar un items del inventory y finalizar la compra exitosamente.', () => {
    cy.fixture("DOM/GX-1708/Plp").then((the) => {
      cy.get(the.product1.image).click()
      cy.get(the.product1.buttonAdd).click()
      cy.get(the.buttonBackToProduct).click()
      cy.get(the.product2.image).click()
      cy.get(the.product2.buttonAdd).click()
      cy.get(the.shoppingCart).click()
      cy.contains('Your Cart').should("be.visible")
      
      cy.get('.cart_list > .cart_item') //hay productos
      cy.contains('Sauce Labs Bike Light').should("be.visible") // como mejorar esto quiero probar si el producto es el que elegi
      cy.get(the.checkout).click()
      cy.get(the.buttonCancel).click()
      cy.get(the.product1.buttonRemove).click()
     // cy.get('.cart_item').should("not.exist")//No hay productos
    })
  })

  it('US GX-1708 | TS 1709 | TC7: Validar que el usuario realizar una comprar de varios producto y eliminar dos items del inventory y finalizar la compra exitosamente.', () => {
    cy.fixture("DOM/GX-1708/Plp").then((the) => {
      cy.get(the.product1.image).click()
      cy.get(the.product1.buttonAdd).click()
      cy.get(the.buttonBackToProduct).click()
      
      cy.get(the.product2.image).click()
      cy.get(the.product2.buttonAdd).click()
      cy.get(the.buttonBackToProduct).click()
      
      cy.get(the.product3.image).click()
      cy.get(the.product3.buttonAdd).click()
      cy.get(the.buttonBackToProduct).click()
      
      cy.get(the.product4.image).click()
      cy.get(the.product4.buttonAdd).click()
      cy.get(the.buttonBackToProduct).click()

      cy.get(the.product5.image).click()
      cy.get(the.product5.buttonAdd).click()
      cy.get(the.buttonBackToProduct).click()

      cy.get(the.product6.image).click()
      cy.get(the.product6.buttonAdd).click()
      cy.get(the.buttonBackToProduct).click()

      cy.get(the.shoppingCart).click()
      cy.get('.cart_item').should("exist")
      cy.get(the.buttonContShop).click()
      cy.get(the.product1.buttonRemove).click()
      cy.get(the.product2.buttonRemove).click()
    })
  })

}) 