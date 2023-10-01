import credentialsData from '../../fixtures/data/GX-35026-CredentialsData.json';
class POM {
	//getters
	get = {
		inputUsername: () => cy.get("[data-test='username']"),
		inputPassword: () => cy.get("[data-test='password']"),
		btnLogin: () => cy.get("[id='login-button']"),
		divInventoryItems: () => cy.get('.inventory_item'),
		ErrorMsg: () => cy.get('form h3').filter(':visible'),
	};

	//setters
	setInputUsername(username) {
		//'standard_user'
		this.get.inputUsername().type(username);
	}
	setInputPassword(password) {
		//'secret_sauce'
		this.get.inputPassword().type(password);
	}
	submitBtnLogin() {
		this.get.btnLogin().click();
	}
	clearInputs() {
		this.get.inputUsername().clear();
		this.get.inputPassword().clear();
	}

	/*método para tratar de hacer login*/
	login(username, password) {
		this.clearInputs();
		this.setInputUsername(username);
		this.setInputPassword(password);
		this.submitBtnLogin();
	}
	returnLoginPage() { 
		cy.visit(credentialsData.url.LP);
		//cy.visit('https://www.saucedemo.com/v1/index.html');
		cy.url().should('match', /index.html/);
	}
}
export const pom = new POM();
