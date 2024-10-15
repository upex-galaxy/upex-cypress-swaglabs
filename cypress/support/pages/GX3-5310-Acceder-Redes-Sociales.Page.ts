
class redes {
	get = {
		inputUserName: () =>  cy.get('[data-test="username"]'),
		inputPassword: () => cy.get('[data-test="password"]'),
		buttonLogin: () => cy.get ('[name="login-button"]'),
		labelError:()=> cy.get ('[data-test="error"]'),

		inputTwitter: () =>  cy.get('[data-test="social-twitter"]'),
		inputFacebook: () => cy.get('data-test="social-facebook"]'),
		inputLinkedin: () => cy.get ('[data-test="social-linkedin"]'),

	};

	enterUserName(UserName: string){
		UserName &&this.get.inputUserName().type(UserName);
	}
	enterPassword(Password: string){
		Password &&this.get.inputPassword().type(Password);
	}
	submitLogin() {
		this.get.buttonLogin().click({ force: true });
	}
	clickTwitter(){
	 	this.get.inputTwitter().invoke('removeAttr', 'target').click();
	}
	clickFacebook(){
		this.get.inputFacebook().invoke('removeAttr', 'target').click();
	}
	clickLinkedin() {
		this.get.inputLinkedin().invoke('removeAttr', 'target').click();
	}
}
export const RedesPage = new redes();
