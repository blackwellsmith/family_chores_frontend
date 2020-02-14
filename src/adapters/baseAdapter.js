class BaseAdapter{
    constructor(baseURL = 'http://localhost:3000') {
        this.baseURL = baseURL 
        this.token = null
    }

    get headers() {
        let baseHeaders = {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        } 
        if (this.token) {
            baseHeaders = { ...baseHeaders, 'Authorization': `Bearer ${this.token}`}
        }
        return baseHeaders
    }

    async checkStatus(res) {
         if (res.status < 200 || res.status > 299) {
            const msg = await res.json()
            let errorMsg = msg.error 
            if(!errorMsg){errorMsg = msg.errors.detail }
            //throw new Error(errorMsg )
            throw new Error(errorMsg)
        }
    }
}