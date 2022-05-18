import axios from "axios";



export const baseUrl = 'bayut.p.rapidapi.com'

export const fetcApi = async(url) =>{
    const {data} = await axios.get((url),{
       headers: {
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
            'X-RapidAPI-Key': 'a747c2bb51msha12e6996a2c4d63p1ef62cjsn75e7abcc6b16'
        }
        
    })
}