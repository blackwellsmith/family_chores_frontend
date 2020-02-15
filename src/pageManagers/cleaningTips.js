class CleaningTipsPage extends PageManager{

    constructor(container, adapter) {
        super(container)
        this.adapter = new CleaningTipsAdapter(adapter)
    }
    
    initBindingsAndEventListeners() { 

    }
   //this was changed to an about page
    get staticHTML() {
        return (`
        <div>
          <br>
        <h1>Feeling like you don't have time is normal. We are here to help with this simple app.</h1>
          <br>
        <h2>You can make whatever goals you want. Goals could also be about doing things you love as well. Life isn't always about work but unfinished work can strip your free time of it's enjoyment. They could be....</h2>
          <br>
        
        <ul>
        <li>Going back to school</li>
        <li>Getting in shape</li>
        <li>Keeping into touch with friends</li>
        <li>Start painting again</li>
        <li>Write a poem</li>
        <li>Use this app to keep your chores in order</li>
        <li>the list could go on and on</li>
        </ul>
          <br>
        <h2>To finish goals you have to address them on a daily basis you can't ignore them.</h2>
          <br>
        <h2>You also have the ability to prioritize your goals, some need attention sooner then others!</h2>
          <br>
        <h2>We suggest you create a new habit of checking you list everyday and see what you can do now.</h2>
          <br>
        <h2>Remember to keep positive about your goals and realize everyone has set backs.</h2>
          <br>
        <h2>Every journey is different what will yours be?</h2>
          <br>
        </div>
        `)
    }
}