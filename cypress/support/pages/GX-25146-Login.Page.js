import Credenciales from '@data/GX-25146-Login.json';

const UserOK = Credenciales.User.valid.Correct;
const PassOK = Credenciales.Password.valid;
const UserBlocked = Credenciales.User.invalid.blocked;

class login {
	get = {
		UserInput: () => cy.get('[id="user-name"]'),
		PassInput: () => cy.get('[id="password"]'),
		LoginButton: () => cy.get('[id="login-button"]'),
		ErrorMessage: () => cy.get('[class="error-message-container error"]'),
	};

	TypeValidUser() {
		this.get.UserInput().type(UserOK);
	}

	TypeBlockedUser() {
		this.get.UserInput().type(UserBlocked);
	}

	TypeValidPass() {
		this.get.PassInput().type(PassOK);
	}

	ClickButtonLogin() {
		this.get.LoginButton().click();
	}
}

export const Login = new login();
