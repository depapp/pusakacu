const { Given, When, Then } = require('@cucumber/cucumber')

const LoginPage = require('../../../pages/web/auth/login.page')
const HomePage = require('../../../pages/web/home/home.page')

const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async(page) => {
    await pages[page].open()
})

When(/^I login with (\w+) and (.+)$/, async(username, password) => {
    await LoginPage.login(username, password)
})

Then(/^I should see (\w+) page$/, async(page) => {
    await expect(HomePage.verify).toHaveTextContaining(page)
})
