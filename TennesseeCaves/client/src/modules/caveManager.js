const baseUrl = "/api/Cave";

export const getAllCaves = () =>{
    return fetch(baseUrl).then((response)=>response.json())
};

export const getSingleCaveById = (id) =>{
    return fetch(`${baseUrl}/${id}`).then((response)=>response.json())
};

