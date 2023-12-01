import axios from "axios";

export async function login(email, password){

    return  axios
    .get("https://jsonplaceholder.typicode.com/users", {email: email , password : password})
    .then((res) => res.status)
}

export async function scrollViewData(setData){

    try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setData(response.data);
        return response.data;
    }catch{
        console.error('Error fetching data', error);
    }
    
}

