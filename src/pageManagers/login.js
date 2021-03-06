class LoginPage extends PageManager{

    constructor(container, adapter) {
        super(container)
        this.adapter = new LoginAdapter(adapter)
        }


    initBindingsAndEventListeners() {
        this.form = this.container.querySelector('form#login-form')
        
        this.form.addEventListener('submit', this.handleSubmit.bind(this))
    }
    
  async handleSubmit(e) {
    e.preventDefault()
    const inputs = Array.from(e.target.querySelectorAll('input'))
    const [email, password] = inputs.map(input => input.value)
        
    const params = {
      user: { email, password }
    }
    try {
      await this.adapter.login(params)
      this.redirect('profile')
    } catch (err) {
      this.handleError(err)
    }
  }

    get staticHTML() {
        return (`
        <h2>Login</h2>
        <form id="login-form">
          <div class="form-group">
            <div class="row">
            <div class="col-xs-4">
            <label for="email">Email address</label>
              <input type="email" class="form-control input-lg" id="email" aria-describedby="emailHelp" placeholder="Enter email" required>
              <small id="emailHelp" class="form-text text-muted">We'll never share your email</small>
          </div>
          <div class="col-xs-4">
            <label for="password">Password</label>
              <input type="password" class="form-control input-lg" id="password" placeholder="Password" required>
          </div>
          </div>
          </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
       `)
   } 
}