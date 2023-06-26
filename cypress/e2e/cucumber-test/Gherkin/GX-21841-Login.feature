Feature: ✅SwagLabs | Account | Iniciar sesión y BR de Accesos

    Background:
        Given el usuario debe tener una cuenta registrada previamente
        (Nota: En este caso, creamos unas credenciales ficticias para las pruebas)
        And el usuario debe estar situado en la página de Login.

    Scenario Outline: #1 usuario inicia sesión correctamente
        When el usuario rellena el formulario ingresando "<Username>" y "<Password>" correcto
        And hace click en el botón "LOGIN"
        Then el usuario debe ser redirigido al PLP como usuario loggeado
        And debe poder ver todos los items disponibles de la tienda.
        Examples:
            | username                | password     |
            | standard_user           | secret_sauce |
            | problem_user            | secret_sauce |
            | performance_glitch_user | secret_sauce |

    Scenario: #2 usuario intenta iniciar sesión con cuenta bloqueada
        Given el sistema ha bloqueado la Cuenta de Usuario como "locked_out_user"
        When el usuario rellena el formulario ingresando el Mismo Username y Password correcto
        And hace click en el botón "LOGIN"
        Then debe aparecer un mensaje amigable indicando que el usuario está bloqueado como:
        "Epic sadface: Sorry, this user has been locked out."
        And el sistema debe denegar el acceso al PLP

    Scenario Outline: #3 usuario intenta iniciar sesión con un cuenta incorrecta o inexistente
        When el usuario rellena el formulario ingresando "<Username>" o "<Password>" inexistente en la Database
        And hace click en el botón "LOGIN"
        Then debe aparecer un mensaje amigable indicando que no hay match con la Database como:
        "Epic sadface: Username and password do not match any user in this service"
        And el sistema debe denegar el acceso al PLP.
        Examples:
            | user          | password        |
            | no_user       | secret_sauce    |
            | standard_user | secret_password |

    Scenario Outline: #4 usuario intenta iniciar sesión dejando campos vacíos en el formulario
        When el usuario deja campos vacíos "<usuario>" o "<password>" en el formulario (ver criterio)
        And hace click en el botón "LOGIN"
        Then el sistema debe denegar el acceso del usuario al PLP
        And debe aparecer un mensaje amigable "<errorMessage>" por campo requerido cumpliendo los criterios:
        Ejemplo:
        * Si el campo vacío es Username => "Epic sadface: Username is required"
        * Si el campo vacío es Password => "Epic sadface: Password is required"
        * Si el campo vacío es Username y Password => "Epic sadface: Username is required"
        Examples:
            | user          | password     | errorMessage                       |
            |               | secret_sauce | Epic sadface: Username is required |
            | standard_user |              | Epic sadface: Password is required |
            |               |              | Epic sadface: Username is required |

Feature: No Authentication Access

    Scenario Outline: usuario intenta ingresar a un endpoint de la website sin haber iniciado sesión.
        Given el usuario NO ha iniciado sesión en la website de SwagLabs
        When ingresa a un "<endpoint>" interno de la website que requiera autorización (ver ejemplo)
        Then el usuario debe ser redirigido a la página de Login
        And debe desplegarse un mensaje amigable "<errorMessage>" indicando que no puede acceder sin antes iniciar sesión:
        "Epic sadface: You can only access '/' when you are logged in."
        (Nota: las comillas simples debe contener el Endpoint al que el usuario intentó ingresar)
        Ejemplo, si ingresa a "https://www.saucedemo.com/inventory.html":
        "Epic sadface: You can only access '/inventory.html' when you are logged in."
        Examples:
            | endpoint                  | errorMessage                                                                          |
            | /inventory                | Epic sadface: You can only access '/inventory.html' when you are logged in.           |
            | /cart.html                | Epic sadface: You can only access '/cart.html' when you are logged in.                |
            | /checkout-step-one.html   | Epic sadface: You can only access '/checkout-step-one.html' when you are logged in.   |
            | /inventory-item.html?id=0 | Epic sadface: You can only access '/inventory-item.html?id=0' when you are logged in. |
            | /inventory-item.html?id=3 | Epic sadface: You can only access '/inventory-item.html?id=3' when you are logged in. |