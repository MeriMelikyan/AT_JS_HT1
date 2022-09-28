class AdminPage {

    get userNameHeader() {
        return $('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[1]/a/span')
    }

    getUserNameText() {
        this.userNameHeader.getText();
    }

}

module.exports = new AdminPage();
