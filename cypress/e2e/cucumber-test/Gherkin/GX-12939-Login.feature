Feature: ✅SwagLabs | Account | Iniciar sesión y BR de Accesos

    Background:
        Given Estar situado en el website de Swaglabs

    Scenario Outline: 12940 | TC1: Validar iniciar sesion correctamente
        When se rellenen los campos de username con <username> y password con <password>
        Then el usuario sera redirecionado al Inventory
        Examples:
            | username                | password     |
            | standard_user           | secret_sauce |
            | problem_user            | secret_sauce |
            | performance_glitch_user | secret_sauce |

    Scenario Outline: 12940 | TC2: Validar NO iniciar sesion y sus BRs correspondientes
        When se rellenen las casillas correspodientes de username con <username>, y password con <password>
        Then se comprobara que se disparen los <LogError> correspodientes
        Examples:
            | username        | password     | LogError                                                      |
            | locked_out_user | secret_sauce | "Sorry, this user has been locked out."                       |
            | Messi           | Messi        | "Username and password do not match any user in this service" |
            | Messi           |              | "Password is required"                                        |
            |                 | Messi        | "Username is required"                                        |
            |                 |              | "Username is required"                                        |

    Scenario Outline: 12940 | TC3: Validar NO acceder a endpoints sin logearse
        When ingrese al endpoint <url> sin logearse
        Then sera redirecionado a la pagina de login mostrando el <LogError>
        Examples:
            | url                                      | LogError                                                                |
            | www.saucedemo.com/inventory.html         | "You can only access '/inventory.html' when you are logged in."         |
            | www.saucedemo.com/cart.html              | "You can only access '/cart.html' when you are logged in."              |
            | www.saucedemo.com/checkout-step-one.html | "You can only access '/checkout-step-one.html' when you are logged in." |