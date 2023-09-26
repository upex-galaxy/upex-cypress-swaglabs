import { removeLogs } from '@helper/RemoveLogs';
import { SwagLogin } from '@pages/GX-25291-SwabLab-login.Page';
import { swagLabPLPpage } from '@pages/GX-37049-SwagLabPLP.page';
import { swagLabsPDPpage } from '@pages/GX-37049-SwagLabPDP.page';
import { swgCheckout1Page } from '@pages/GX-37049-SwagLabCheckout1.page';
import { swglabCheckout2Page } from '@pages/GX-37049-SwaglabCheckout2.page';
import { swgCompleteChkPage } from '@pages/GX-37049.SwgCompleteCheckout';
import data from '@data/GX-37049-Checkout-finish-cancel.json';
import { faker } from '@faker-js/faker';
const [Fname, pass, postalCode] = [faker.name.firstName(), faker.internet.password(), faker.datatype.number()];
removeLogs();

describe('SwagLabs | Checkout | Finalizar o Cancelar la compra de un producto en la Website', () => {
	beforeEach(
		'PCR: Situarse en la Web , Loguearse correctamente , add 1 producto o más, realizar proceso checkout , estar situado en la confirm del product',
		() => {
			cy.visit('/');
			SwagLogin.Login(data.Username, data.Password);
			SwagLogin.ClickButtonSubmit();
			SwagLogin.get.ElementLabelProduct().should('exist');
			swagLabPLPpage.AddItem().then(Values => {
				let [itemName, itemPrice] = Values;

				swagLabPLPpage.get.listItemName().should('have.text', itemName);
				swagLabPLPpage.get.listItemPrice().should('have.text', itemPrice);
				swagLabsPDPpage.ClickButtonCheckout();
				cy.url().should('contain', data.checkout.step1);
				swgCheckout1Page.fillCheckoutInfo({ Fname: Fname, pass: pass, postalCode: postalCode });
				swgCheckout1Page.get.inputUsername().should('have.value', Fname);
				swgCheckout1Page.get.inputPassword().invoke('val').should('deep.equal', pass);
				swgCheckout1Page.get.inputPostalCode().invoke('val').should('contain', postalCode);
				swgCheckout1Page.clickButtonContinueToChk2();
				cy.url().should('include', data.checkout.step2);
			});
		}
	);
	it('37050 | TC1: Validar finalizar la compra de un producto', () => {
		swglabCheckout2Page.clickButtonFinish();
		swgCompleteChkPage.get
			.elementCompleteHeaderTxt()
			.invoke('text')
			.then(currentHeaderTxt => {
				expect(currentHeaderTxt).to.eql(data.CompleteTxtCheckout.header);

				swgCompleteChkPage.get
					.elementCompleteTxt()
					.invoke('text')
					.then(currentChildTxt => {
						expect(currentChildTxt).to.include(data.CompleteTxtCheckout.childTxt);
					});
			});
	});

	it('37050 | TC2: Validar cancelar la compra de un producto ', () => {
		swglabCheckout2Page.clickButtonCancel();
		cy.url().should('contain', data.endpointPLP);
		swagLabPLPpage.get.badgeButtonShoppingCart().invoke('text').should('exist').and('have.lengthOf', 1);
	});
});
