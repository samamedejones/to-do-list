import axios from "axios"

export const api = axios.create({
    baseURL: "https://servidor-rocketnote.onrender.com"
})