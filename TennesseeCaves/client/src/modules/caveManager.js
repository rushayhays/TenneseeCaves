const baseUrl = "/api/Cave";

export const getAllCaves = () =>{
    return fetch(baseUrl).then((response)=>response.json())
};

export const getAllUsersCaves = (id) =>{
  return fetch(`${baseUrl}/userCaves/${id}`).then((response)=>response.json())
};

export const getSingleCaveById = (id) =>{
    return fetch(`${baseUrl}/${id}`).then((response)=>response.json())
};

export const addCave = (cave) => {
    return fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cave),
    });
};

export const updateCave = (cave) => {
    return fetch(`${baseUrl}/edit/${cave.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(cave),
    });
};

export const updateCaveOrganizations = (cave) => {
    return fetch(`${baseUrl}/caveOrganization`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cave),
    });
};

export const deleteCave = (id) => {
    return fetch(baseUrl + `/${id}`, {
      method: "DELETE"
    });
};

//Get back to this
export const addCaveToUserPage = (userCave) => {
  return fetch(`${baseUrl}/userCave`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userCave),
  });
};


export const updateCaveIsFavoriteStatus = (userCave) => {
  return fetch(`${baseUrl}/userCave`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userCave),
  });
};

export const deleteCaveFromUserPage = (userCave) => {
  return fetch(`${baseUrl}/userCave`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userCave),
  });
};

export const searchCaves = (searchPrompt) =>{
  return fetch(`${baseUrl}/searchResults/${searchPrompt}`).then((response)=>response.json())
};

export const getAllUsersFavCaves = (id) =>{
  return fetch(`${baseUrl}/favorite/${id}`).then((response)=>response.json())
};

export const getAllUsersRecentCaves = (id) =>{
  return fetch(`${baseUrl}/recent/${id}`).then((response)=>response.json())
};


