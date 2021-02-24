const Page = require('../common/page')

class LoginPage extends Page {

    get inputUsername() { return $('#user-name') }
    get inputPassword() { return $('#password') }
    get btnSubmit() { return $('#login-button') }

    open() {
        return super.open()
    }

    async login(username, password) {
        await (await this.inputUsername).setValue(username)
        await (await this.inputPassword).setValue(password)
        await (await this.btnSubmit).click()
    }
    
}

module.exports = new LoginPage()