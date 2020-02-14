class EnjoyingLifeAdapter{

    constructor(baseAdapter) {
        this.baseAdapter = baseAdapter
        this.baseURL = this.baseAdapter.baseURL

    }

    get token() {
        return this.baseAdapter.token
    }

    get headers() {
        console.log(this.baseAdapter.headers)
        return this.baseAdapter.headers
    }

}