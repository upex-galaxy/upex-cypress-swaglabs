class SwagLabLogin {
	get = {
		InputUsername: () => cy.get('[data-test="username"]'),
		InputPassword: () => cy.get('[data-test="password"]'),
		ButtonSubmit: () => cy.get('[type="submit"]'),
		ElementErrorMsj: () => cy.get('[data-test="error"]'),
		ElementLabelProduct: () => cy.get('[class="title"]'),
	};

	Login(username, password) {
		username && this.get.InputUsername().type(username);
		password && this.get.InputPassword().type(password);
	}
	ClickButtonSubmit() {
		this.get.ButtonSubmit().click();
	}

	GetMsjEndpoint() {
		return this.get
			.ElementErrorMsj()
			.invoke('text')
			.then(msj => {
				const replaceSimplQuote = msj.replace(/'/g, '"');
				return replaceSimplQuote;
			});
	}
}
export const SwagLogin = new SwagLabLogin();
