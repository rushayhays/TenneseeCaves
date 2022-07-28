const baseUrl = "/api/Tour";

export const getAllToursForASpecificCave = (id) =>{
    return fetch(`${baseUrl}/${id}`).then((response)=>response.json())
};

export const getSingleTour = (id) =>{
    return fetch(`${baseUrl}/singleTour/${id}`).then((response)=>response.json())
};

export const addTour = (tour) => {
    return fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tour),
    });
};

export const updateTour = (tour) => {
    return fetch(`${baseUrl}/edit/${tour.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(tour),
    });
};

export const deleteOrganization = (id) => {
    return fetch(baseUrl + `/${id}`, {
      method: "DELETE"
    });
};