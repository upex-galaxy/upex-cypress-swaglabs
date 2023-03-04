/* 
    Decente Test Suite elaborado (Esto implica que se vean bien el código en general, que al menos funcione).
    NO usar fixture como PageObjectModel sino como Data-Entry (es decir, no agarrar elementos por fixtures)

    Si utilizó Fixtures como tal: Chequear que el Data.json esté dentro de la carpeta correspondiente al componente.
    Si realizó PageObjectModel como tal: Chequear que el Page.js esté dentro de la carpeta pages en support.
    Si utilizó Commands como tal: Chequear que solo lo haya usado para crear pasos de Precondiciones o Scripts de Algoritmos complejos (Que no lo usen como Pasos de Acción, eso sería tarea para el POM).
    Si utilizó el CI Pipeline: Asegurarse de que lo haya modificado correctamente y no haya borrado o cambiado nada más. y Funcione OK.
    Si utilizó Cucumber como tal: Chequear el archivo Gherkin esté decentemente escrito y que Funcione la Ejecución en CI.
    Si la persona usó CI, POM y Cucumber correctamente, es motivo para que suba a Nivel 2 mediante un Challenge (una nueva US asignada)
*/
import {login as Login} from '@pages/Login.Page'
import {inv} from '@pages/Inventory.Page'
import {cart} from '@pages/ShopingCart.Page'
const {login, endpoint} = Cypress.env('swagLabs')

describe('US GX-9779 | TS: ✅SwagLabs | SCP | Remover producto del Carrito de Compras',()=>{
    beforeEach("Usuario inicia sesion en la pagina SwagLabs",()=>{
        //Ir a swaglabs
        cy.visit('https://www.saucedemo.com/ ') 
        //Iniciar sesion 
        cy.log(login)
        Login.enterUsername(login.users.correctUser)
        Login.enterPassword(login.users.correctPass)
        Login.submitLogin()
        cy.url().should('include',endpoint.inventory)
    })
    it("9780 | TC1: Validar remover el ultimo producto del SC",()=>{
        //Precondicion: tener un producto agregado al SC -> Agregar un item 
        inv.addOneProduct()
        cart.get.quantityProducts().should('have.text','1')
        //1-Ir al SC -> Ver item agregado 
        cart.goToSC()
        cy.url().should('include',endpoint.cart)
        cy.url().should('include','cart')
        //2-Hacer click en boton remover -> Visualizar que se borre card de item ,icono de SC y texto donde se indica que no hay mas productos
        cart.removeLastProduct()
        cart.get.quantityProducts().should('not.have.text') 
    })
    it('9780  | TC2: Validar remover un producto del SC',()=>{
        inv.get.addProduct().then((products)=>{
            //Precondicion: tener mas de un producto agregado al SC -> Agregar items (random) 
                //Genera un numero random del 1 a la cantidad de elementos disponibles (6)
            let x = Math.floor(Math.random() * products.length + 1 ) 
            inv.addProducts(x) 
            cart.get.quantityProducts().should('have.text',x) 
            //1-Ir al SC -> Ver items agregados y cantidad en icono SC
            cart.goToSC()
            cy.url().should('include',endpoint.cart)
            cy.url().should('include','cart')
            //2-Hacer click en boton remover de un producto -> Visualizar que se borre card de item ,icono de SC con cantidad menos uno 
            cart.removeProduct() 
            x--;
            //Condicional: Si el texto es mayor a 0 se espera tener la cantidad menos 1 ,si es 0 no se visualiza ningun texto
            (x>0) ? cart.get.quantityProducts().should('have.text',x)
            : cart.get.quantityProducts().should('not.have.text')
        })        
    })
})