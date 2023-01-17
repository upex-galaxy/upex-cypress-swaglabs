Feature: SwagLabs | PLP Sorting | Filtrar productos por nombre o precio

    Background: 
        Given el usuario debe encontarse logeado en la home page
        And visualizar al menos 2 productos disponibles con diferentes nombres y precios
        And visualizar el filtro seleccionado por default: NAME A TO Z

    Scenario:3875 | TC1: Validar filtrar productos por NOMBRE descendente
        When seleccionar filtro Name Z to A
        Then Chequear que los productos se organizan de la Z a la A 

    Scenario:3875 | TC2: Validar filtrar productos por NOMBRE ascendente
        When seleccionar filtro Name A to Z
        Then Chequear que los productos se organizan de la A a la Z 

    Scenario:3875 | TC3: Validar filtrar productos por PRECIO ascendente
        When seleccionar filtro Price Low to high
        Then Chequear que los productos se organizan según su precio desde el más económico al más caro

    Scenario:3875 | TC4: Validar filtrar productos por PRECIO descendente
        When seleccionar filtro Price High to low
        Then Chequear que los productos se organizan según su precio desde el más caro al más económico