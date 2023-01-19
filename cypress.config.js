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
	projectId: '',
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
	env:{
		SwagLabsUrl : "https://www.saucedemo.com",
		AdminUser:{

			username: "Admin",
			password: "admin123"
		},
		endpoint:{
			authLogin: "/auth/login",
			dashboardIndex: "/dashboard/index",
			signUp: "https://coderbyte.com/sl" 
		},
		user: {
			username: "upexTesting",
			email: "sai@upextesting.com",
			password: "1234567"
		},
		// ----------- SwagLabs ------------ //
		// Datos fijos seleccionados
		swagLabs: {
			endpoint: {
				inventory: '/inventory.html',
				cart: '/cart.html',
				checkoutStepOne: '/checkout-step-one.html',
				checkoutStepTwo: '/checkout-step-two.html',
				checkoutComplete: '/checkout-complete.html',
			},
			login: {
				user: {
					standarUser: 'standard_user',
					secretSauce: 'secret_sauce',
					lockedOutUser: 'locked_out_user',
					problemUser: 'problem_user',
					performanceGlitchUser: 'performance_glitch_user',
					invalidUser: 'invalid_user',
					invalidPassword: 'invalid_password',
				},
				errorMessage: {
					passwordError: 'Epic sadface: Username and password do not match any user in this service',
					userError: 'Epic sadface: Username and password do not match any user in this service',
					passwordNull: 'Epic sadface: Password is required',
					userNull: 'Epic sadface: Username is required',
					userPasswordNull: 'Epic sadface: Username is required',
					inventoryError: "Epic sadface: You can only access '/inventory.html' when you are logged in.",
					cartError: "Epic sadface: You can only access '/cart.html' when you are logged in.",
					stepOneError: "Epic sadface: You can only access '/checkout-step-one.html' when you are logged in.",
					stepTwoError: "Epic sadface: You can only access '/checkout-step-two.html' when you are logged in.",
					completeError: "Epic sadface: You can only access '/checkout-complete.html' when you are logged in.",
				},
			}
		}
			
		
	}
})
