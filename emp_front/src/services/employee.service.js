import axios from 'axios';


const url="http://localhost:8080/employee";

const create =(Employee) => axios.post(url,Employee);
const getall=()=>axios.get(url)
const service={create ,getall}
export default service;