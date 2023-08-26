import {login} from '../../../support/pages/GX-29331-Account/GX-29331-Login.page';
import credentials from '../../../fixtures/data/GX-29331-My-data.json'

describe('SwagLabs | Account | Iniciar sesión y BR de Accesos', () => {
    beforeEach(() =>{
        cy.visit('/');
    })

    it('29333 | TC1: Verifique que el usuario inicia sesión correctamente', ()=>{
        login.enterUsername('standard_user');
        login.enterPassword('secret_sauce');
        login.clickOnSubmitBtn();
        login.assertTitlePage();
    })

    // it('29333 | TC2: Verifique que el usuario no pueda iniciar sesión con cuenta bloqueada', ()=>{
    //     login.enterUsername(data.Credentials.);
    // })

    // it('29333 | TC3: Verifique que el usuario no pueda iniciar sesión con un cuenta incorrecta o inexistente', ()=>{
    //     login.enterUsername(data.Credentials.);
    // })

    // it('29333 | TC4: Verifique que el usuario no pueda iniciar sesión dejando campos vacíos en el formulario', ()=>{
    //     login.enterUsername(data.Credentials.);
    // })
});