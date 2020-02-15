class Navbar extends PageManager{
    constructor(container, adapter) {
        super(container)
        this.adapter = new ProfileAdapter(adapter)
    }

    

    get is_authenticated() {
        return !!this.adapter.token
    }

    initBindingsAndEventListeners() {
        this.container.addEventListener('click', this.handleClick.bind(this))
    }

    handleClick(e) {
      if (e.target.tagName === "A") {
          console.log(e.target)
            e.preventDefault()
            if (e.target.id != 'logout-link') {
                const route = e.target.id.split('-')[0]
                if (route != this.currentPage()) { this.redirect(route), console.log(route) }
            } else {
              
              this.adapter.token = null
              this.redirect('welcome')
              
            }
       }
    }

    get staticHTML() {
        if (this.is_authenticated) {
            return (`
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <a class="navbar-brand" href="#">🧹 AntiProcrastinator</a>
              <button class="navbar-toggler toggler-example" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1"
              aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation"><span class="dark-blue-text"><i
                  class="fas fa-bars fa-1x"></i></span></button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                      <a class="nav-link" id="profile-link" href="#">Profile <span class="sr-only">(current)</span></a>
                    </li>
      
                    <li class="nav-item">
                      <a class="nav-link" id="cleaning-link" href="#">Cleaning Tips</a>
                    </li>
      
                    <li class="nav-item">
                      <a class="nav-link" id="life-link" href="#">Enjoying Life</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" id="logout-link" href="#">Logout </a>
                    </li>
                  </ul> 
                </div>
            </nav>
            `)
        } else {
         return   (`
         <nav class="navbar navbar-expand-lg navbar-light bg-light">
           <a class="navbar-brand" href="#">🧹 AntiProcrastanator</a>
             <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span class="navbar-toggler-icon"></span>
             </button>
       
         <div class="collapse navbar-collapse" id="navbarSupportedContent">
           <ul class="nav navbar-nav">
             <li class="nav-item active">
               <a class="nav-link" id="welcome-link" href="#">Welcome <span class="sr-only">(current)</span></a>
             </li>
             <li class="nav-item">
               <a class="nav-link" id="login-link" href="#">Login </a>
             </li>
             <li class="nav-item">
               <a class="nav-link" id="signup-link" href="#">Signup</a>
             </li>
           </ul> 
         </div>
       </nav>
        `)
            
        }
    }
}