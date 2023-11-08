🪶SwagLabs | Account | Iniciar sesión y BR de Accesos

ACCEPTANCE CRITERIA:

Feature: iniciar Sesión

Backgraund: Given el usuario debe tener una cuenta registrada previamente (Nota: En este caso, creamos unas credenciales ficticias para las pruebas)
And el usuario debe estar situado en la página de Login.

Scenario: #1 usuario inicia sesión correctamente When el usuario rellena el formulario ingresando Username y Password correcto And hace click en el
botón "LOGIN" Then el usuario debe ser redirigido al PLP como usuario loggeado And debe poder ver todos los items disponibles de la tienda.

Scenario: #2 usuario intenta iniciar sesión con cuenta bloqueada Given el sistema ha bloqueado la Cuenta de Usuario como "locked_out_user" When el
usuario rellena el formulario ingresando el Mismo Username y Password correcto And hace click en el botón "LOGIN" Then debe aparecer un mensaje
amigable indicando que el usuario está bloqueado como: "Epic sadface: Sorry, this user has been locked out." And el sistema debe denegar el acceso al
PLP

Scenario: #3 usuario intenta iniciar sesión con un cuenta incorrecta o inexistente When el usuario rellena el formulario ingresando Username o
Password inexistente en la Database And hace click en el botón "LOGIN" Then debe aparecer un mensaje amigable indicando que no hay match con la
Database como: "Epic sadface: Username and password do not match any user in this service" And el sistema debe denegar el acceso al PLP

Scenario: #4 usuario intenta iniciar sesión dejando campos vacíos en el formulario When el usuario deja campos vacíos en el formulario (ver criterio)
And hace click en el botón "LOGIN" Then el sistema debe denegar el acceso del usuario al PLP And debe aparecer un mensaje amigable por campo requerido
cumpliendo los criterios: Ejemplo: _ Si el campo vacío es Username => "Epic sadface: Username is required" _ Si el campo vacío es Password => "Epic
sadface: Password is required" \* Si el campo vacío es Username y Password => "Epic sadface: Username is required"

Feature: No Authentication Access

Scenario: usuario intenta ingresar a un endpoint de la website sin haber iniciado sesión. Given el usuario NO ha iniciado sesión en la website de
SwagLabs When ingresa a un endpoint interno de la website que requiera autorización (ver ejemplo) Then el usuario debe ser redirigido a la página de
Login And debe desplegarse un mensaje amigable indicando que no puede acceder sin antes iniciar sesión: "Epic sadface: You can only access '/' when
you are logged in." (Nota: las comillas simples debe contener el Endpoint al que el usuario intentó ingresar) Ejemplo, si ingresa a
"https://www.saucedemo.com/inventory.html": "Epic sadface: You can only access '/inventory.html' when you are logged in."

Business rules: 1

Inicio de sesión con username bloqueado.

Epic sadface: Sorry, this user has been locked out.

2

Inicio de sesión fallido (Not match)

Epic sadface: Username and password do not match any user in this service

3

Inicio de sesión fallido (Null username)

Epic sadface: Username is required

4

Inicio de sesión fallido (Null password)

Epic sadface: Password is required

5

Inicio de sesión fallido (Null username + Null password)

Epic sadface: Username is required

Validations:

42152| TC1: Validar iniciar sesión correctamente con el username “standard_user”

42152| TC2: Validar iniciar sesión correctamente con el username “problem_user”

42152| TC3: Validar iniciar sesión correctamente con el username “performance_glitch_user”

42152| TC4: Validar no poder iniciar sesión con un username bloqueado

42152| TC5 Validar inicar sesión con un username y un password diferente al servicio web

42152| TC6 Validar no poder iniciar sesión sin el username

42152 TC7 Validar no poder iniciar sesión sin el password

42152| TC8 Validar no poder iniciar sesión sin username ni password

41426| TC9 Validar intentar ingresar a un endpoint de la website sin haber iniciado sesión
