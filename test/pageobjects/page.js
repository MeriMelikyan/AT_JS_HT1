module.exports = class Page {    
    open (path) {
        return browser.url(`https://opensource-demo.orangehrmlive.com/${path}`)
    }
}
