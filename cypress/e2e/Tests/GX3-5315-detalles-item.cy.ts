import { checkoutPage } from '../../support/pages/GX3-5315-detalles-item.Page';
import { LoginPage} from '../../support/pages/GX3-5263-iniciar-sesion.Page';

describe('[Automation] SwagLabs | PDP | Visualizar Detalles del Item (Producto)',()=>{
	after('Eliminar los productos del carrito',()=>{
		checkoutPage.get.buttonRemove().click();
	});
	beforeEach('PRC:El usuario debe estar logueado y situado en el PLP',()=>{
		cy.visit('https://www.saucedemo.com/');
		LoginPage.enterUserName('standard_user');
		LoginPage.enterPassword('secret_sauce');
		LoginPage.submitLogin();
		cy.url().should('include', '/inventory');
	});
	it('5321 | TC1: Validar que se visualice el detalle del producto cuando no este agregado al carrito',()=>{
		checkoutPage.getIteRandoms().then(indexrandom =>{
			checkoutPage.getValuesItemPlp(indexrandom,'namePlp','descPlp','pricePlp');
			checkoutPage.openItemDetails(indexrandom);
			cy.then(()=>{
				checkoutPage.getValuesItemDp('nameDp','descDp','priceDp');
				cy.then(()=>{
					expect(Cypress.env('namePlp')).equal(Cypress.env('nameDp'));
					expect(Cypress.env('descPlp')).equal(Cypress.env('descDp'));
					expect(Cypress.env('pricePlp')).equal(Cypress.env('priceDp'));
				});
			});
		});
	});
	it('5321 | TC2: Validar que se visualice el detalle del producto cuando este agregado al carrito',()=>{
		checkoutPage.getIteRandoms().then(indexrandom =>{
			checkoutPage.getValuesItemPlp(indexrandom,'namePlp','descPlp','pricePlp');
			checkoutPage.clickAddCard(indexrandom);
			checkoutPage.clickShoppingCard();
			cy.then(()=>{
				checkoutPage.getValuesItemDp('nameDp','descDp','priceDp');
				cy.then(()=>{
					expect(Cypress.env('namePlp')).equal(Cypress.env('nameDp'));
					expect(Cypress.env('descPlp')).equal(Cypress.env('descDp'));
					expect(Cypress.env('pricePlp')).equal(Cypress.env('priceDp'));
				});
			});
		});
	});
});
