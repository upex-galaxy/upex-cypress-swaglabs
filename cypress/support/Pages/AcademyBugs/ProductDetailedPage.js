export class ProductDetailedPage{
    constructor() {
        this.accesories = 'a[id="menu2"]';
        this.submenu1 = 'a[id="submenu1"]';
        this.submenu4 = 'a[id="menu4"]';
        this.submenu5 = 'a[id="submenu5"]';
    }

    ClickonAccesories() {
        cy.get(this.accesories).click();
    }
    Checkmenu() {
        return cy.get('ul').find(this.submenu1);
    }
    ClickonHandbagpurse() {
        cy.get(this.submenu1).click();
    }
    ClickonFashiontype() {
        cy.get(this.submenu4).click();
    }
    Checkmenu2() {
        return cy.get(this.submenu5)
    }
}