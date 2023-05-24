describe('✅SwagLabs | Account | Iniciar sesión y BR de Accesos', () => {
	beforeEach('User must be in the Login page', () => {
		// runs before every it() test block
	});

	it('17549 | TC1: Validate User can log in successfully', () => {
		// Write your test case one here
	});
	it('17549 | TC2: Validate user cannot log in with empty data and BR5 is displayed', () => {
		// Write your test case two here
	});
	it('17549 | TC3: Validate user cannot log in with Only number in Username field and BR2 is displayed', () => {
		// Write your test case two here
	});
	it('17549 | TC4: Validate user cannot log in with Especial Characters in Username field and BR2 is displayed', () => {
		// Write your test case two here
	});
	it('17549 | TC5: Validate user cannot log in with invalid Username only and BR2 is displayed', () => {
		// Write your test case two here
	});
	it('17549 | TC6: Validate user cannot log in with invalid Password only and BR2 is displayed', () => {
		// Write your test case two here
	});
	it('17549 | TC7: Validate user cannot log in with empty Username field only and BR3 is displayed ', () => {
		// Write your test case two here
	});
	it('17549 | TC8: Validate user cannot log in with empty Password field only and BR4 is displayed', () => {
		// Write your test case two here
	});
	it('17549 | TC9: Validate user cannot log in with Locked User credentials and BR1 is displayed', () => {
		// Write your test case two here
	});
	it('17549 | TC10: Validate User cannot access an Endpoint without Login', () => {
		// Write your test case two here
	});
});

import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
