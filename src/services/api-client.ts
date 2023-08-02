import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'7e331cd535954c758c00edd5c3cde5ec'
    }
})

