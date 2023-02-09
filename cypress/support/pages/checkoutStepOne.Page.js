class checkoutOne{
    get = {
        cancelButton:()=>cy.get("#cancel"),
		continueButton:()=>cy.get("#continue"),
        lastNameCO:()=>cy.get("#last-name"),
        firstNameCO:()=>cy.get("#first-name"),
		postalCodeCO:()=>cy.get("#postal-code"),
        error: () => cy.get("[data-test='error']"),		
    }
enterFirstName(text){
    this.get.firstNameCO().click().type(text)
}	
enterLastName(text){
    this.get.lastNameCO().click().type(text)
}
enterPostalCode(text){
    this.get.postalCodeCO().click().type(text)
}
clickCancel(){
    this.get.cancelButton().click()
}
clickContinue(){
    this.get.continueButton().click()
    }
}
export const CheckoutStepOne = new checkoutOne()