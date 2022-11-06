import axios from "axios"

export const API = axios.create({
    baseURL: "https://api.v2.kontenbase.com/query/api/v1/fda30547-2f96-4e2c-a3f6-8dd874ae9472"
})