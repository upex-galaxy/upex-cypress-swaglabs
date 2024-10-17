
class redes {
	get = {
		inputUserName: () =>  cy.get('[data-test="username"]'),
		inputPassword: () => cy.get('[data-test="password"]'),
		buttonLogin: () => cy.get ('[name="login-button"]'),
		labelError:()=> cy.get ('[data-test="error"]'),

		inputRedesSociales: (redes:string) =>  cy.get(`[data-test="social-${redes}"]`),
		inputFacebook: () => cy.get('[data-test="social-facebook"]'),
		inputLinkedin: () => cy.get ('[data-test="social-linkedin"]'),

	};

	enterUserName(UserName: string){
		this.get.inputUserName().type(UserName);
	}
	enterPassword(Password: string){
		this.get.inputPassword().type(Password);
	}
	submitLogin() {
		this.get.buttonLogin().click();
	}
	clickRedesSociales(redes:string){
	 	this.get.inputRedesSociales(redes).invoke('removeAttr', 'target').click();
	}

}
export const RedesPage = new redes();
