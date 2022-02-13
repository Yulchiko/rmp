import axios from "axios";
import baseURL from "../Url/Url";



const axiosService = axios.create({
    baseURL,
    params: {
        api_key: 'e4efa81609bf45987aaa84aabf0f38ab',
    }
});

export default axiosService;