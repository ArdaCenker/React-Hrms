import axios from "axios";

export default class EmploymentTypeService {

  getEmploymentType() {
    return axios.get("http://localhost:8080/api/employmentTypes/getall");
  }

}