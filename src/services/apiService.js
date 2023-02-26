import axios from "axios";

import {baseURL} from "../configs";


const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Yzk0YTM4ZDExNTEzOTg5NjQ3MjJlZDc0MWMyZjJjOSIsInN1YiI6IjYzZjY0MWU2OWJjZDBmMDA3YmUxM2Y5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3ouLh11o6MNVyXDvIWjEo7eCmTQoFPD2iJqMnHCaDZ0'

const apiService = axios.create({baseURL});

apiService.interceptors.request.use((request)=> {
    request.headers = {
            Authorization: `Bearer ${token}`,
        };
    return request
})


export {
    apiService
}

