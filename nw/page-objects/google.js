module.exports = {
    url:'https://www.google.com/advanced_search',
    elements: {
        firstSelector: "input[name=as_q]",
        languageSelector: "#lr_button",
        otherSelector: "#as_qdr_button",
        button: "#CIGjud"
    },
    commands: [{
        async setQuery(query){
            console.log("Set Query ")
            await this.waitForElementVisible('@firstSelector')
            await this.setValue('@firstSelector', query)
            return this;
        },
        async selectFilter(selector, value){
            console.log("select Filter")
            await this.click(selector)
            await this.click(`.goog-menuitem[value="${value}"]`)
            return this;
        },
        async search(){
            console.log('Click Search')
            await this.submitForm('@button')
            return this;
        },
        setQuery2(query){
            return this.perform(() => {
                console.log("Set Query 2 ")
                this.waitForElementVisible('@firstSelector')
                this.setValue('@firstSelector', query)
            })
        },
        search2(){
            return this.perform(() => {
                console.log('Click Search 2')
                this.submitForm('@button')
            })
        },
        /*async search(mainQuery, languageValue, otherValue){
            //console.log('DEBUT METHOD');
            await this.waitForElementVisible('@firstSelector')
            await this.setValue('@firstSelector', mainQuery)
            await this.click('@languageSelector')
            await this.click(languageValue)
            await this.click('@otherSelector')
            await this.click(otherValue)
            await this.submitForm('@button')
            //console.log('FIN METHOD');
            return this;
        }*/
    }]

};