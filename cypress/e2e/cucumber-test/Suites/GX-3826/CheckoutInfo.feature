@US_GX-3826
Feature: ✅SwagLabs | Checkout Info | Insertar información del comprador.

	Background:
		#@PREC_GX-3895
		Given El usuario ingresa a la WebPage de Swag Labs con una cuenta valida
		And El usuario agrega un producto al SC
		And El usuario ingresa al SCP
		And El usuario presiona el Botón de CHECKOUT


	# @TC_GX-3894 @TS_GX-3827 @Gherkin
	Scenario Outline:3827 | TC1:  Validar cuando los datos sean validos dispare la BR1
		When Rellenara los campos de First Name con "<FirstName>" el campo de Last Name con "<LastName>" y el campo Zip con "<Zip>"
		Then Comprobara que se disparen las BR corespondientes
		Examples:
			| FirstName | LastName | Zip  |
			| Lionel    | Messi    | 1212 |

	# @TC_GX-3899 @TS_GX-3827 @Gherkin
	Scenario Outline:3827 | TC2:  Validar cuando no se ingresen datos dispare BR2, BR3, BR4 Respectivamente
		Then Rellenara los campos de First Name con "<FirstName>", el campo de Last Name con "<LastName>", y el campo Zip con "<Zip>"
		And Comprobara que se disparen los "<LogError>" corespondientes
		Examples:
			| FirstName | LastName | Zip  | LogError                       |
			| NULL      | Messi    | 1212 | Error: First Name is required  |
			| Lionel    | NULL     | 1212 | Error: Last Name is required   |
			| Lionel    | Messi    | NULL | Error: Postal Code is required |


	# @TC_GX-4176 @TS_GX-3827 @Gherkin	
	Scenario:3827 | TC3: Validar Funcion del Botón Cancel de Checkout-step-one Page
		Then El usuario presiona el botón Cancel 
		And Regresará al SCP

