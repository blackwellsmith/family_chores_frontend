class ProfilePage extends PageManager{

    constructor(container, adapter) {
        super(container)
        this.adapter = new ProfileAdapter(adapter)
        this.choreAdapter = new ChoreAdapter(adapter)
        this.user = null
    }
  
  
    initBindingsAndEventListeners() {
      return null
    }

    finalBindingsAndEventListeners() {
        this.choresContainer = document.getElementById('chores-container')
        this.form = this.container.querySelector('#chore-form')
        this.choresContainer.addEventListener('click', this.handleChoreDelete.bind(this))
        this.form.addEventListener('submit', this.handleNewChoreSubmit.bind(this), console.log(this.form))

      
    }

    handleChoreDelete(e) {
        const choreId = e.target.dataset.id
        if (e.target.nodeName === "A") { e.target.parentNode.remove() }
        this.choreAdapter.deleteChore(choreId).then(() =>{ this.redirect('profile')})
          
    }

    async handleNewChoreSubmit(e) {
        e.preventDefault()
        const inputs = Array.from(e.target.querySelectorAll('input'))
        const select = e.target.querySelectorAll('select')
        const priority = select[0].value
        const [name, notes] = inputs.map(input => input.value)
        const params = { chore: { name, notes, priority } }
        try {
          await this.choreAdapter.newChore(params)
          this.redirect('profile')
        } catch(err){
          this.handleError(err)
        }
      }
  
  
  
  async fetchAndRenderPageResources() {
      try {
          const userObj = await this.adapter.getUser()
          this.user = new User(userObj)
          this.renderOwner()
      } catch (err) {
          this.handleError(err)
      }
  }

    
    get staticHTML() {
        return (`
        <div class="loader"></div>
        `)
    }

    renderOwner() {
        this.container.innerHTML = this.user.profileHTML
        this.finalBindingsAndEventListeners()
    }

    
}