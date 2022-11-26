import {loginPage} from '../../../../support/Pages/GX2-470/loginPage'

const LoginPage = new loginPage()
const login = require('../../../../fixtures/DOM/Account/loginPage.Page.json')

describe('GX2-470 ✅SwagLabs | Account | Iniciar sesión', () => {
	beforeEach(() => {
		cy.viewport(1920, 1080)
		cy.visit('/')
		cy.url().should('contain', 'saucedemo')
	})
	it(login.TC1.name, () => {
		LoginPage.typeUsername(login.TC1.username)
		LoginPage.typePassword(login.TC1.password)
		LoginPage.clickLoginButton()
		LoginPage.elemento.url().should('contain', login.TC1.expected)
	})
	it(login.TC2.name, () => {
		LoginPage.typeUsername(login.TC2.username)
		LoginPage.typePassword(login.TC2.password)
		LoginPage.clickLoginButton()
		LoginPage.elemento.errorMessage().should('have.text', login.TC2.expected)
	})
	it(login.TC3.name, () => {
		LoginPage.typeUsername(login.TC3.username)
		LoginPage.typePassword(login.TC3.password)
		LoginPage.clickLoginButton()
		LoginPage.elemento.errorMessage().should('have.text', login.TC3.expected)
	})
	it(login.TC4.name, () => {
		LoginPage.clickLoginButton()
		LoginPage.elemento.errorMessage().should('have.text', login.TC4.expected)
	})
})
