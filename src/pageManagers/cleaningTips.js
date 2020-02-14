class CleaningTipsPage extends PageManager{

    constructor(container, adapter) {
        super(container)
        this.adapter = new CleaningTipsAdapter(adapter)
    }
    
    initBindingsAndEventListeners() { 

    }

    get staticHTML() {
        return (`
        <div>
        <br>
        <h1>Cleaning can feel like a burden, with a few different tips we can knock the dust off of anything!</h1>
        <br>
        <h2>The lonely sock.....We all know that little guy, how about we put him to work! They have more use then you think.🧦</h2>
        <br>
        
        <ul>
        <li>dusting widows, fans, doors, trim, blinds, around furniture, mirrors, you name it</li>
        <li>covering for a ice pack
        <li>fill with rice and put in microwave for 30 seconds now you got a hot pad</li>
        </ul>
        </div>
        `)
    }
}