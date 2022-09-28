const Page = require('./page');

class LoginPage extends Page {
    
    get inputUsername () {return $('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/div[2]/input')}
    get inputPassword () {return $('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[2]/div/div[2]/input')}
    get btnSubmit () {return $('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button')}

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

        open () {
        return super.open('web/index.php/auth/login');
    }
}

module.exports = new LoginPage();
