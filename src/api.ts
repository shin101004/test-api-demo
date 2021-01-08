import axios from "axios";

export const formApi=(url:string)=> {
    console.log(url);
    return axios.get(url);
}