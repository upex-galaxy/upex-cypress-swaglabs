@US_GX-22639
Feature: SwagLabs | Account | Iniciar sesión y BR de Accesos

	Background:
		#@PRC_GX-22668
		Given User is situated in Swaglabs website

	#GX-22639
	@TC_GX-22671 @TS_GX-22640 @SwagLabs
	Scenario Outline: 22640 | TC1: User do the Login successfully
		When User fill out the form entering username as "<Username>" and password as "<Password>" correctly
		And click in "LOGIN" button
		Then User must be redirected to the PLP as a registered user
		And should be able to see all the items available of the store
		Examples:
			| Username                | Password     |
			| standard_user           | secret_sauce |
			| problem_user            | secret_sauce |
			| performance_glitch_user | secret_sauce |

	#GX-22639
	@TC_GX-22673 @TS_GX-22640 @SwagLabs
	Scenario Outline: 22640 | TC2: User try to login with a blocked session
		When User fill out the form entering a blocked username as "<username>" and a correct password as "<password>".
		Then a message as "<errorMsg>" should be display.
		Examples:
			| username        | password     | errorMsg                                            |
			| locked_out_user | secret_sauce | Epic sadface: Sorry, this user has been locked out. |

	#GX-22639
	@TC_GX-22674 @TS_GX-22640 @SwagLabs
	Scenario Outline: 22640 | TC3: User try to Login with an invalid or nonexistent account
		When User fill out the form entering an invalid or nonexistent username as "<username>" and password as "<password>".
		Then a message as "<errorMsg>" should be display indicating there is no match with the database.
		Examples:
			| username        | password        | errorMsg                                                                  |
			| invalidUsername | secret_sauce    | Epic sadface: Username and password do not match any user in this service |
			| standard_user   | invalidPassword | Epic sadface: Username and password do not match any user in this service |

	#GX-22639
	@TC_GX-22677 @TS_GX-22640 @SwagLabs
	Scenario Outline: 22640 | TC4: User try to Login leaving empty fields in the Form
		When User leave empty field in username as "<username>" and empty field in password as "<password>".
		Then a message as "<errorMsg>" should be display for required field.
		Examples:
			| username      | password     | errorMsg                           |
			|               | secret_sauce | Epic sadface: Username is required |
			| standard_user |              | Epic sadface: Password is required |
			|               |              | Epic sadface: Username is required |

	#GX-22639
	@TC_GX-22679 @TS_GX-22640 @SwagLabs
	Scenario Outline: 22640 | TC5: User try to access to a website endpoint without doing the Login.
		When enter to an internal "<endpoint>" of the website that requires authorization.
		Then a message as "<errorMsg>" should be display indicating that cannot access without logging in first.
		Examples:
			| endpoint                | errorMsg                                                                            |
			| /inventory.html         | Epic sadface: You can only access '/inventory.html' when you are logged in.         |
			| /cart.html              | Epic sadface: You can only access '/cart.html' when you are logged in.              |
			| /checkout-step-one.html | Epic sadface: You can only access '/checkout-step-one.html' when you are logged in. |
			| /checkout-step-two.html | Epic sadface: You can only access '/checkout-step-two.html' when you are logged in. |
			| /checkout-complete.html | Epic sadface: You can only access '/checkout-complete.html' when you are logged in. |
