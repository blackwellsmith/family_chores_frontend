class ChoreAdapter{

    constructor(baseAdapter) {
        this.baseAdapter = baseAdapter
        this.baseURL = this.baseAdapter.baseURL

    }

    get token() {
        return this.baseAdapter.token
    }

    get headers() {
        
        return this.baseAdapter.headers
    }

    

    async newChore(params) {
        const res = await fetch(`${this.baseURL}/chores`, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(params)
        })
        await this.baseAdapter.checkStatus(res)
        console.log(res)
        //this.baseAdapter.token = res.headers.get("authorization").split(' ')[1]
       
    }

    deleteChore(id) {
         return fetch(`${this.baseURL}/chores/${id}`, {
             method: 'DELETE',
             headers: this.headers,
         })
    }
}