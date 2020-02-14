class ProfileAdapter{


    constructor(baseAdapter) {
        this.baseAdapter = baseAdapter
        this.baseURL = this.baseAdapter.baseURL

    }

    get token() {
        return this.baseAdapter.token
    }

    set token(arg) {
        
        this.baseAdapter.token = arg
        return this.baseAdapter.token
       
    }

    get headers() {
        
        return this.baseAdapter.headers
    }

    

    async getUser() {
        const res = await fetch(`${this.baseURL}/profile`,{
           headers: this.headers
        }) 
        this.baseAdapter.checkStatus(res)
        return await res.json()
    }
}