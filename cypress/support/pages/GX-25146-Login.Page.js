import Credenciales from '@data/GX-25146-Login.json';

const UserOK = Credenciales.User.valid.Correct;
const PassOK = Credenciales.Password.valid;

class login {
	get = {
		UserInput: () => cy.get('[id="user-name"]'),
		PassInput: () => cy.get('[id="password"]'),
		LoginButton: () => cy.get('[id="login-button"]'),
	};

	UserOK() {
		this.get.UserInput().type(UserOK);
	}

	PassOK() {
		this.get.PassInput().type(PassOK);
	}

	ButtonLogin() {
		this.get.LoginButton().click();
	}
}

export const Login = new login();
