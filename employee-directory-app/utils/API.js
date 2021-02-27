import axios from "axios";

constBASEURL = "https://randomuser.me/api/?results=150";

export default {
    getEmployee: function (){
        return axios.get(BASEURL);
    }
};