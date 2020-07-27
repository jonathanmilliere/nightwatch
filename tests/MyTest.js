module.exports = {
    "@tags": ["tutu"],
    'My test case'(browser){
        browser
            .perform(() => { debugger; })
            .url("https://news.ycombinator.com/")
            .waitForElementVisible('.hnname')
            .perform(() => { debugger; })
            .perform(() => { console.log("Milieu")})
            .perform(() => { debugger; })
            .assert.containsText(".hnname", "Hacker News")
            .perform(() => { debugger; })
            .end()
            .perform(() => { console.log("End")})
    }
}