import axios from 'axios'

class SignupStore {
    countries = []

    constructor(){
        this.getCountries()
    }

    getCountries = async () => {
        try {
            await axios.get(`https://restcountries.com/v2/all`)
            .then(res => {
                const data = res.data
                this.countries = data.map(country => {
                    return {
                        name: country.name
                    }
                })
            }) 
        } catch(err) {
            console.error(err)  
        }
    }
}

export default new SignupStore()