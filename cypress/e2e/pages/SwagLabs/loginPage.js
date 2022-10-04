class loginPage {

    elements = {
        "username_input": () => cy.get("[data-test='username']"),
        "password_input": () => cy.get("[data-test='password']"),
        "login_button": () => cy.get("[data-test='login-button']")
    }


    typeUsername(username) {
        this.elements.username_input().type(username)
    }

    typePassword(password) {
        this.elements.password_input().type(password)
    }

}

module.exports = new loginPage()