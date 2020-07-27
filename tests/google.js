module.exports = {
    "@tags": ["google", "toto"],
    '01. Google test Search: Use Async/await': async function(browser){      
        //console.log('TEST DEBUT');
        await browser.page.google().navigate()
        debugger;
        await browser.page.google().setQuery(browser.globals.query)
        debugger;
        await browser.page.google().selectFilter('@languageSelector', 'lang_it')
        debugger;
        await browser.page.google().selectFilter('@otherSelector', 'w')
        debugger;
        await browser.page.google().search()
        var test = await browser.getTitle();   
        console.log(test)
        await browser.assert.ok(test.value.includes(browser.globals.query), 'Title contains ' + browser.globals.query)
        //console.log("GO");
        //await browser.page.google().search(browser.globals.query, languageValue, otherValue)
        debugger;
        await browser.saveScreenshot('tests-output/screenshots/google1.png')
        //console.log('TEST FIN');
    },

    '02. Google test Search: Gogo': function(browser){
        const google = browser.page.google();
        /*google
           .navigate()
           .setQuery("toto")
            .selectFilter('@languageSelector', 'lang_it')
            .selectFilter('@otherSelector', 'w')
            .search()*/
        //await browser.page.google().search("Batman", langIT, otherValue)
        //await browser.saveScreenshot('tests_output/google2.png')
    },

    '03. Google test Search: Use chains and perform()': function(browser){
        const google = browser.page.google();
        google
            .navigate()
            .setQuery2("tutu")
            .search2()
    }
}