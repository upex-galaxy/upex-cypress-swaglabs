/* eslint-disable indent */
describe('⚡️[Automation] SwagLabs | Account | Iniciar sesión y BR de Accesos', () => {
	beforeEach('Precondition: User must have a registered account previously and be positioned at Login page', () => {
		cy.visit('https://www.saucedemo.com/');
	});

	it('TC#1: Validate login in filling the fields Username and Password with correct credentials', () => {
		cy.fixture('DOM/SwagLabs/GX3-618-AccountLogin').then(the => {
			cy.get(the.Username.input).type(the.Username.data.valid.username1); // Type username
			cy.get(the.Password.input).type(the.Password.data.valid.password); // Type password
			cy.get(the.SubmitButton.button).click(); // Click login button
			cy.get(the.SubmitButton.appLogo).contains(the.SubmitButton.isLoggedIn); // Check after login
		});
	});

	it('TC#2: Validate NOT login in with a blocked account', () => {
		cy.fixture('DOM/SwagLabs/GX3-618-AccountLogin').then(the => {
			cy.get(the.Username.input).type(the.Username.data.blocked.username8); // Type blocked username
			cy.get(the.Password.input).type(the.Password.data.valid.password); // Type password
			cy.get(the.SubmitButton.button).click(); // Click login button
			cy.get(the.ErrorMessage.tag).contains('locked out').should('be.visible'); // Check error message
		});
	});

	it('TC#3: Validate NOT login in with an invalid or non-existent Username', () => {
		cy.fixture('DOM/SwagLabs/GX3-618-AccountLogin').then(the => {
			cy.get(the.Username.input).type(the.Username.data.invalid.username6); // Type invalid username
			cy.get(the.Password.input).type(the.Password.data.valid.password); // Type password
			cy.get(the.SubmitButton.button).click(); // Click login button
			cy.get(the.ErrorMessage.tag).contains('not match any user').should('be.visible'); // Check error message
		});
	});

	it('TC#4: Validate NOT login in with an invalid or non-existent Password', () => {
		cy.fixture('DOM/SwagLabs/GX3-618-AccountLogin').then(the => {
			cy.get(the.Username.input).type(the.Username.data.valid.username1); // Type username
			cy.get(the.Password.input).type(the.Password.data.invalid.invalidPass); // Type invalid password
			cy.get(the.SubmitButton.button).click(); // Click login button
			cy.get(the.ErrorMessage.tag).contains('not match any user').should('be.visible'); // Check error message
		});
	});

	it('TC#5: Validate NOT login in when the field Username is empty', () => {
		cy.fixture('DOM/SwagLabs/GX3-618-AccountLogin').then(the => {
			// cy.get(the.Username.input).type(the.Username.data.invalid.username7); // Cypress does not admit empty strings, therefore this line should not exist
			cy.get(the.Password.input).type(the.Password.data.valid.password); // Type password
			cy.get(the.SubmitButton.button).click(); // Click login button
			cy.get(the.ErrorMessage.tag).contains('Username is required').should('be.visible'); // Check error message
		});
	});

	it('TC#6: Validate NOT login in when the field Password is empty', () => {
		cy.fixture('DOM/SwagLabs/GX3-618-AccountLogin').then(the => {
			cy.get(the.Username.input).type(the.Username.data.valid.username1); // Type username
			// cy.get(the.Password.input).type(the.Password.data.invalid.emptyPass);    // Cypress does not admit empty strings, therefore this line should not exist
			cy.get(the.SubmitButton.button).click(); // Click login button
			cy.get(the.ErrorMessage.tag).contains('Password is required').should('be.visible'); // Check error message
		});
	});

	// it('TC#7: Validate NOT accessing to a specific website endpoint without login in previously', () => {
	// 	cy.visit('/inventory.html'); //consultar
	// });
});

//Se importa la funcion
import { removeLogs } from '@helper/RemoveLogs';

//Se ejecuta la funcion para evitar los errores (puedes hacerlo al final de tu codigo)
removeLogs();
