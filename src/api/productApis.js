import axios from "axios";

export const productAPI = axios.create({
    baseURL: "https://fakestoreapi.com"
})