const baseUrl = "/api/Organization";

export const getAllOrganizations = () =>{
    return fetch(baseUrl).then((response)=>response.json())
};

export const getSingleOrganization = (id) =>{
    return fetch(`${baseUrl}/singleOrg/${id}`).then((response)=>response.json())
};

export const addOrganization = (org) => {
    return fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(org),
    });
};

export const updateOrganization = (org) => {
    return fetch(`${baseUrl}/edit/${org.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(org),
    });
};

export const deleteOrganization = (id) => {
    return fetch(baseUrl + `/${id}`, {
      method: "DELETE"
    });
};