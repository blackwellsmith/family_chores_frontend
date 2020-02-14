class PageManager {
    
    constructor(container) {
        this.container = container
    }

    initBindingsAndEventListeners() {
        return null
    }

    fetchAndRenderPageResources() {
        return null
    }

    handleError(err) {
        if (err.type === "Authorization Error") {
            this.redirect('welcome')
        } else {
            this.handleAlert(err)
        }
    }

    render() {
        this.container.innerHTML = this.staticHTML
        this.initBindingsAndEventListeners()
        this.fetchAndRenderPageResources()
    }
}