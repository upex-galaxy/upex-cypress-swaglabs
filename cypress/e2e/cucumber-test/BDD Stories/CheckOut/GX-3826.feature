Feature Insertar información del comprador

Background: 
	Given el usuario se encuentra logueado
	And tiene uno o varios productos añadidos al shopping cart
	And se sitúa en la sección “cart”
	And accede  al checkout

Scenario 1 Usuario llena exitosamente el formulario de comprador (Happy Path)
	When el usuario llena con datos válidos el form del checkout
	And el usuario hace click en el botón “Continue”
	Then el usuario ingresa exitosamente a la sección checkout-step-two

Scenario 2 Usuario ingresa datos nulos en los campos del formulario (Negativo)
	When el usuario ingresa datos nulos en el form del checkout
	And el usuario hace click en el botón “Continue”
	Then se despliega el mensaje de error:
		se dispara la BR3 en caso de First_Name null
		se dispara la BR4 en caso de Last_Name null

Scenario 3 Usuario ingresa caracteres especiales en los campos del formulario (Negativo)
	When el usuario ingresa caracteres especiales en el form del checkout
	And el usuario hace click en el botón “Continue”
	Then se despliega un mensaje de error:
		se dispara la BR5 en caso de First_Name inválido
		se dispara la BR6 en caso de Last_Name inválido
		se dispara la BR7 en caso de Postal_Code inválido

Scenario 4 Usuario ingresa caracteres numéricos en los campos del formulario (Negativo)
	When el usuario ingresa caracteres numéricos en el form del checkout
	And el usuario hace click en el botón “Continue”
	Then se despliega un mensaje de error:
		se dispara la BR8 en caso de First_Name inválido
		se dispara la BR9 en caso de Last_Name inválido

Scenario 5 Usuario hace click en el botón “Cancel”
	Given el usuario ha ingresado datos el form del checkout
	When el usuario hace click en el botón “Cancel” 
	Then el usuario regresa a la sección “Cart”



BR1-Campo válido

BR2-Name required
Error: First Name is required

BR3-LastName required
Error: Last Name is required

BR4-PostalCode required
Error: Postal Code is required

BR5-Special characters in First Name
Error: Special characters are not allowed

BR6-Special characters in Last Name
Error: Special characters are not allowed

BR7-Special characters in Postal Code
Error: Special characters are not allowed

BR8-Numeric characteres in First Name
Error: Numeric characters not allowed

BR9-Numeric characteres in Last Name
Error: Numeric characters not allowed