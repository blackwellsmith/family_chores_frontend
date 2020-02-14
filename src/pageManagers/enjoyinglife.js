class EnjoyingLifePage extends PageManager{

    constructor(container, adapter) {
        super(container)
        this.adapter = new EnjoyingLifeAdapter(adapter)
    }
    
    initBindingsAndEventListeners() { 

    }

    get staticHTML() {
        return (`
        <div>
        <br>
        <h1>You are Legendary! Enjoy!</h1>
        <br>
        <ul>
        <li>Go to a movie</li>
        <li>Eat pizza</li>
        <li>Walk your dog</li>
        <li>Pull out those old board games</li>
        <li>Plant some tulips</li>
        <li>Cook your favorite meal</li>
        <li>Walk in the woods</li>
        <li>Get up, Get out and do something!</li>
        </ul>
        <br>
        <h1>Your Legendary Life is waiting!</h1>
        <br>
        <br>
        </div>
        `)
    }
}