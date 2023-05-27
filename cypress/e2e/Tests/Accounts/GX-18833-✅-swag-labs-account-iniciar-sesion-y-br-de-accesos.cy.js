import data from 'cypress/fixtures/data/data.json';

cy.log(data);

describe('✅-swag-labs-account-iniciar-sesión-y-br-de-accesos', () => {
	let username;
	//let l_username;

	before('fixture login', () => {
		cy.fixture('cypress/fixtures/data/data.json').then(data => {
			username = data.username;
			//l_username = data.l_username;
		});
		cy.visit('https://www.saucedemo.com/');
	});

	it('GX-18834 | TC1: Validar que usuario pueda iniciar sesión con el username standard_user exitosamente.', () => {
		cy.get('#user-name').type(username); // Ingresar el valor del campo de nombre de usuario
		// Agrega más pasos de prueba aquí
	});
});
