export class CheckoutPage{

    constructor() {
        this.nameinput = 'input[id="first-name"]';
        this.lastnameinput = '//input[@id="last-name"]';
        this.zipinput = 'input[id="postal-code"]';
        this.continuebutton = '//input[@name="continue"]';
        this.finishbutton = 'button[id="finish"]';
        this.header = '//h2[@class="complete-header"]';
        this.text = 'div[class="complete-text"]';
        this.cancelbutton = 'button[id="cancel"]';
    }

    InputName(name) {
        cy.get(this.nameinput).type(name);
    }
    InputSurname(surname) {
        cy.xpath(this.lastnameinput).type(surname);
    }
    InputZip(zip) {
        cy.get(this.zipinput).type(zip);
    }
    Continue() {
        cy.xpath(this.continuebutton).click();
    }
    finishButton() {
        return cy.get(this.finishbutton);
    }
    Header() {
        return cy.xpath(this.header);
    }
    Text() {
        return cy.get(this.text);
    }
    cancelButton() {
        return cy.get(this.cancelbutton);
    }

}