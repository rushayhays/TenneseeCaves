const baseUrl = "/api/Cave";

export const getAllCaves = () =>{
    return fetch(baseUrl).then((response)=>response.json())
};