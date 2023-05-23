Feature: iniciar Sesión

    Scenario: #1 usuarie inicia sesión correctamente
        When usuario rellena el formulario ingresando "<username>" y "<password>" correcto
        Then usuario debe ser redirigido al PLP como usuario loggeado
        And debe poder ver todos los items disponibles de la tienda
        Examples:
            | username                | password     |
            | standard_user           | secret_sauce |
            | problem_user            | secret_sauce |
            | performance_glitch_user | secret_sauce |

    Scenario: #2 usuarie intenta iniciar sesión con cuenta bloqueada
        When usuario ingresa con username "<username>" bloqueado, y password con "<password>" valida
        Then se comprueba que se dispare el "<errorMsg>" de usuario bloqueado
        Examples:
            | username        | password     | errorMsg                                            |
            | locked_out_user | secret_sauce | Epic sadface: Sorry, this user has been locked out. |

    Scenario: #3 usuarie intenta iniciar sesión con una cuenta incorrecta o inexistente
        When usuario ingresa con username "<username>" o password con "<password>" inexistente en la Database
        Then se comprueba que se disparen los "<errorMsg>" correspodientes a cuenta incorrecta
        Examples:
            | username         | password     | errorMsg                                                                  |
            | invalid_username | secret_sauce | Epic sadface: Username and password do not match any user in this service |
            | standard_user    | invalid_pass | Epic sadface: Username and password do not match any user in this service |


    Scenario: #4 usuarie intenta iniciar sesión dejando campos vacíos en el formulario
        When usuario ingresa con username "<username>" o password con "<password>" dejando campos vacíos en el formulario
        Then se comprueba que se disparen los "<errorMsg>" correspodientes a usuario y contraseña requeridos
        Examples:
            | username      | password     | errorMsg                           |
            |               | secret_sauce | Epic sadface: Username is required |
            | standard_user |              | Epic sadface: Password is required |
            |               |              | Epic sadface: Username is required |


    Scenario: usuarie intenta ingresar a un endpoint de la website sin haber iniciado sesión.
        When ingresa a un "<endpoint>" interno de la website que requiera autorización
        Then se comprueba que se dispare el "<errorMsg>" correspodiente a acceso denegado por no estar logueado
        Examples:
            | endpoint                | errorMsg                                                                            |
            | /inventory.html         | Epic sadface: You can only access '/inventory.html' when you are logged in.         |
            | /cart.html              | Epic sadface: You can only access '/cart.html' when you are logged in.              |
            | /checkout-step-one.html | Epic sadface: You can only access '/checkout-step-one.html' when you are logged in. |
            | /checkout-step-two.html | Epic sadface: You can only access '/checkout-step-two.html' when you are logged in. |
            | /checkout-complete.html | Epic sadface: You can only access '/checkout-complete.html' when you are logged in. |
