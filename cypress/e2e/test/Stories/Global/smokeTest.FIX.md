**Se realizará corrección sobre los fallos encontrados en los test a ejecutar**

**Test results:**

 ```
 ✖  3 of 19 failed (16%)
 ```

```Suites/GX-1684/shoppingCart.cy.js ✖```<br>
    **Error:** A fixture file could not be found at any of the following paths: <br>
    *Los archivos productList.Page.json y shoppingCart.Page.json no existen (fue borrado de alguna manera)<br>
    **FIX:** Se crearon los archivos faltantes con los datos necesarios para su funcionamiento <br>

```Suites/How-to/sintaxis.cy.js ✖```<br>
   **Error:** Cypress no encontraba los elementos para realizar acciones, no visitaba la web correspondiente.<br>
   **FIX:** Se agregó el cy.visit() correspondiente en los test que fallaban. <br>
   
```Suites/How-to/UI-testing/xpaths/xpath.test.cy.js ✖``` <br>
   **Error:** El baseUrl del archivo cypress.config.json hace fallar el test, esto esta aclarado dentro del mismo. <br>
   **FIX:** Se buscará la forma de ignorar el baseUrl (pendiente) <br>

```Suites/GX-2530/GX-2530.cy.js ✖```<br>
    **Error:** cy.click() can only be called on a single element <br>
    *El selector del objeto del archivo ProductListPage.js se encontraba duplicado<br>
    **FIX:** Se obtuvo el elemento desde otro punto, solucionando el problema<br>   
   