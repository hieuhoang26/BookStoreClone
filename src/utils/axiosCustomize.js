import axios from "axios";
import { store } from "../redux/store";

const instance = axios.create({
    baseURL: 'http://localhost:8080/',
    // timeout: 1000,
    // headers: { 'X-Custom-Header': 'foobar' }

});
// Add a request interceptor
instance.interceptors.request.use(function (config) {
    // attach token to header 
    const token = store?.getState()?.user?.account?.token;
    config.headers["Authorization"] = "Bearer " + token;

    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    //return response;
    //console.log(response)
    return response && response.data ? response.data : response; // only return ve data neu ton tai 
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return error && error.response && error.response.data ? error.response.data : Promise.reject(error);
});
export default instance;