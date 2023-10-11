describe.skip('SwagLabs | Footer | Acceder a las redes sociales de SwagLabs', () => {
	beforeEach(
		'Precondition:The user must successfully log in, The user must navigate to the inventory website, The icons of the social media are available and clickable',
		() => {
			cy.visit('https://www.saucedemo.com/');
			cy.url().should('contain', 'saucedemo');
			cy.fixture('DOM/space/Login.Page').then(the => {
				cy.get(the.input.username).type(the.data.user);

				cy.get(the.input.password).type(the.data.password);

				cy.contains('Login').click();

				//cy.wrap($).click();
			});
		}
	);
	it('1162 | TC1: Verify that the user is successfully redirected to the Twitter page when ckicks on the Twitter icon button', () => {
		cy.get('footer.footer');
		cy.get('li.social_twitter a').should('have.attr', 'href', 'https://twitter.com/saucelabs').click();
	});
	it('1162 | TC2: Verify that the user is successfully redirected to the Facebook page when ckicks on the Facebook icon button', () => {
		cy.get('footer.footer');
		cy.get('li.social_facebook a').should('have.attr', 'href', 'https://www.facebook.com/saucelabs').click();
	});
	it('1162 | TC3: Verify that the user is successfully redirected to the LinkeIn page when ckicks on the LinkeIn icon button', () => {
		cy.get('footer.footer');
		cy.get('li.social_linkedin a').should('have.attr', 'href', 'https://www.linkedin.com/company/sauce-labs/').click();
	});
});
