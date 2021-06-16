import axios from "axios";

export default class LanguageService{

    getAllByCandidateId(id){
        return axios.get("http://localhost:8080/api/controller/getall?candidateId=" + id)
    }
}