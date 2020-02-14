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
      //this.handleAlert(err, 'danger')
      this.handleError(err)
    }
  }

    get staticHTML() {
        return (`
        <h2>Login</h2>
        <form id="login-form">
        <div class="form-group">
          <label for="email">Email address</label>
          <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" required>
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" class="form-control" id="password" placeholder="Password" required>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
        </form>
       `)
   } 
}