import { GX-18833.data.json } from './cypress/fixtures/data/GX-18833data.json';

describe('✅-swag-labs-account-iniciar-sesión-y-br-de-accesos', () => {
	let username;
	let l_username;

	before('fixture login', () => {
		cy.fixture('C:galaxyL1-cypex-swaglabscypress\fixturesdataGX-18833data.json').then(data => {
			username = data.username;
			l_username = data.l_username;
		});
		cy.visit('https://www.saucedemo.com/');
	});

	it('GX-18834 | TC1: Validar que usuario pueda inciar sesion con el username standard_user exitosamente.', () => {
		cy.get('#user-name').type('');
	});
});
