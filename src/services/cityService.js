import axios from "axios";

export default class CityService{
   
    getCities(){
        return axios.get("http://localhost:8080/api/cities/getall")
    }

    getByCityId(id){
       return axios.get("http://localhost:8080/api/cities/getByCityId?cityId="+id)
    }
} 