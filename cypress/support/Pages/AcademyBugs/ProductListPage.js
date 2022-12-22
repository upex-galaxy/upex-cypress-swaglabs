export class ProductListPage {
	selectProduct() {
        cy.get('[href="https://academybugs.com/store/blue-hoodie/"]').eq(2).click();
	}
}
