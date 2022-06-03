class SentryObjects{
    constructor(url){
        this.url=url
    }

    async requiring(){
        const res = await fetch(this.url)
        console.log(res)
        const data = await res.json()
        console.log(data)
        return data["sentry_objects"]

    }

    async putInWebsite(){
        
        let data = await this.requiring()
        data.forEach(elm => {
            const id = elm["sentryId"]
            const name = elm["fullname"]
            const minYear = elm["year_range_min"]
            const maxYear = elm["year_range_max"]
            const li = document.createElement("li")
            li.innerText = `(${id}) ${name}: risco de colisão entre ${minYear} e ${maxYear}`
            document.getElementById("listSentry").appendChild(li)
            
        })
    }
    
}

const sentry = new SentryObjects("https://api.nasa.gov/neo/rest/v1/neo/sentry?is_active=true&page=0&size=50&api_key=DEMO_KEY")
sentry.putInWebsite()