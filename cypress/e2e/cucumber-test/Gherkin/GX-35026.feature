# @GX-35028 @QA @TestExecutionReport
# Feature: US GX-35026 | TX: 🪶SwagLabs | Account | Iniciar sesión y BR de Accesos

#     @TEST_GX-36138 @Account @SwagLabs
#     Scenario: 36138 | TC1: Validar usuario hace log-in correctamente
#         When: El usuario rellena el formulario; ingresando "<Username>" y "<Password>" correctos.
#         And:  Hace click en el botón "LOGIN".
#         Then: El usuario debe ser redirigido al PLP como usuario loggeado.
#         And:  Debe poder ver todos los items disponibles de la tienda.
#         Examples:

#             | Username                | Password     | Msg |
#             | standard_user           | secret_sauce | ""  |
#             | problem_user            | secret_sauce | ""  |
#             | performance_glitch_user | secret_sauce | ""  |

#     @TEST_GX-36139 @Account @SwagLabs
#     Scenario: 36139 | TC2: Validar NO hacer log-in con una cuenta bloqueada
#         Given: El sistema ha bloqueado la Cuenta de Usuario como "locked_out_user".
#         When:  El usuario rellena el formulario ingresando "<UsernameLocked>" y "<Password>" correcto.
#         And:   Hace click en el botón "LOGIN".
#         Then:  Debe aparecer un mensaje amigable indicando que el usuario está bloqueado como: 'Epic sadface: "<Msg>" '
#         And:   El sistema debe denegar el acceso al PLP.
#         Examples:
#             | UsernameLocked  | Password     | Msg                                     |
#             | locked_out_user | secret_sauce | "Sorry, this user has been locked out." |

#     @TEST_GX-36141 @Account @SwagLabs
#     Scenario: 36141 | TC3: Validar NO hacer log-in con una cuenta incorrecta o inexistente
#         When: El usuario rellena el formulario ingresando; "<Username>" o "<Password>" inexistente en la Database.
#         And:  Hace click en el botón "LOGIN".
#         Then: Debe aparecer un mensaje amigable indicando que no hay match con la Database como:'Epic sadface: "<Msg>" '
#         And:  El sistema debe denegar el acceso al PLP.
#         Examples:
#             | Username      | Password     | Msg                                                           |
#             | admin         | sauce_secret | "Username and password do not match any user in this service" |
#             | admin         | secret_sauce | "Username and password do not match any user in this service" |
#             | standard_user | sauce_secret | "Username and password do not match any user in this service" |

#     @TEST_GX-36142 @Account @SwagLabs
#     Scenario: 36142 | TC4: Validar NO hacer log-in cuando se deja algún campo vacío
#         When: El usuario deja campos vacíos en el formulario (ver criterio).
#         And:  Hace click en el botón "LOGIN".
#         Then: El sistema debe denegar el acceso del usuario al PLP.
#         And:  Debe aparecer un mensaje amigable por campo requerido cumpliendo los criterios:'Epic sadface: "<Msg>" '
#         Examples:  formulario
#             | Username      | Password     | Msg                    |
#             | ""            | secret_sauce | "Username is required" |
#             | standard_user | ""           | "Password is required" |
#             | ""            | ""           | "Username is required" |


# Feature: No Authentication Access
#     como usuario de SwagLabs, no deberia acceder a un endpoint diferente del /index.html sin antes iniciar sesion.

#     @TEST_GX-36143 @Account @EndPoint @SwagLabs
#     Scenario: 36143 | TC5: Validar NO acceder a endpoints internos sin antes hacer log-in
#         Given:  El usuario NO ha iniciado sesión en la website de SwagLabs.
#         When:   Ingresa a un "<endpoint>" interno de la website que requiera autorización (ver ejemplo).
#         Then:   El usuario debe ser redirigido a la página de Login.
#         And:    Debe desplegarse un mensaje amigable indicando que no puede acceder sin antes iniciar sesión:
#         'Epic sadface: "<Msg>" '
#         Examples:
#             | endpoint        | Msg                                                             |
#             | /inventory.html | "You can only access '/inventory.html' when you are logged in." |
#             | /cart.html      | "You can only access '/cart.html' when you are logged in."      |

