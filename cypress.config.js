import { defineConfig } from 'cypress'
import createBundler from '@bahmutov/cypress-esbuild-preprocessor'
import pkg from '@badeball/cypress-cucumber-preprocessor'
const { addCucumberPreprocessorPlugin } = pkg
import { createEsbuildPlugin } from '@badeball/cypress-cucumber-preprocessor/esbuild.js'
import { downloadFile } from 'cypress-downloadfile/lib/addPlugin.js'

async function setupNodeEvents(on, config) {
	// This is required for the preprocessor to be able to generate JSON reports after each run, and more,
	await addCucumberPreprocessorPlugin(on, config)

	on('task', { downloadFile })

	on(
		'file:preprocessor',
		createBundler({
			plugins: [createEsbuildPlugin(config)],
		})
	)

	// Make sure to return the config object as it might have been modified by the plugin.
	return config
}

export default defineConfig({
	// @Ely: CYPRESS DASHBOARD PARA VER NUESTRAS EJECUCIONES EN LA WEB:
	projectId: 'n1k8t6',
	// 1280×720 is considered to be the most suitable screen resolution for the desktop website version:
	viewportWidth: 1280,
	viewportHeight: 720,
	// Whether Cypress will watch and restart tests on test file changes:
	watchForFileChanges: false,
	// En Caso de hacer testing en SUT con seguridad web:
	chromeWebSecurity: false,
	// multi-reporters: one report.xml + mochawesome.json per file.
	reporter: 'cypress-multi-reporters',
	reporterOptions: {
		configFile: 'jsconfig.json',
	},
	// Number of times to retry a failed test. If a number is set, tests will retry in both runMode and openMode:
	retries: 0,
	// Whether Cypress will record a video of the test run when running on headless:
	video: false,
	// E2E Testing runner
	e2e: {
		// Glob pattern to determine what test files to load:
		specPattern: ['cypress/e2e/cucumber-test/Gherkin/*.feature', 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}'],
		// Use Cypress plugins:
		setupNodeEvents,
		// baseUrl: ""
	},
	env: {
		baseUrl: 'https://www.saucedemo.com',
		AdminUser: {
			username: 'Admin',
			password: 'admin123',
		},
		endpoint: {
			authLogin: '/auth/login',
			dashboardIndex: '/dashboard/index',
			signUp: 'https://coderbyte.com/sl',
		},
		user: {
			username: 'upexTesting',
			email: 'sai@upextesting.com',
			password: '1234567',
		},
		swagLabs: {
			checkout:{
				firstNameError:'Error: First Name is required',
				lastNameError:'Error: Last Name is required',
				postalCodeError: 'Error: Postal Code is required'

			},
			endpoint: {
				inventory: '/inventory.html',
				cart: '/cart.html',
				checkoutOne: '/checkout-step-one.html',
				checkoutTwo: '/checkout-step-two.html',
				checkoutAll: '/checkout-complete.html',
			},
			login: {
				users: {
					correctUser: 'standard_user',
					correctPass: 'secret_sauce',
					lockUser: 'locked_out_user',
					problemUser: 'problem_user',
					passInv: 'invalid_password',
					glitchUser: 'performance_glitch_user',
					userInv: 'invalid_username',
				},
				errorMsg: {
					inventoryError: "Epic sadface: You can only access '/inventory.html' when you are logged in.",
					cartError: "Epic sadface: You can only access '/cart.html' when you are logged in.",
					checkoutOneError: "Epic sadface: You can only access '/checkout-step-one.html' when you are logged in.",
					checkoutTwoError: "Epic sadface: You can only access '/checkout-step-two.html' when you are logged in.",
					checkoutAllError: "Epic sadface: You can only access '/checkout-complete.html' when you are logged in.",
					lockedUser: 'Epic sadface: Sorry, this user has been locked out.',
					PassOrUserInv: 'Epic sadface: Username and password do not match any user in this service',
					UserNull: 'Epic sadface: Username is required',
					PassNull: 'Epic sadface: Password is required',

				},
			},
		},
	},
})
