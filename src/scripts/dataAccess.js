const applicationState = {
    requests:[],
    
    }
    const mainContainer = document.querySelector("#container")
    const API = "http://localhost:8088"
   

    //fetching requests from api
    export const fetchRequests = () => {
        return fetch(`${API}/requests`)
            .then(response => response.json())
            .then(
                (serviceRequests) => {
                   
                    applicationState.requests = serviceRequests
                }
            )
    }

//fetching clowns from api
export const fetchClowns = () => {
    return fetch(`${API}/clowns`)
        .then(response => response.json())
        .then(
            (data) => {
               
                applicationState.clowns = data
                
            }
        )
}


//fetching completions from api
    export const fetchCompletions = () => {
        return fetch(`${API}/completions`)
            .then(response => response.json())
            .then(
                (data) => {
                   
                    applicationState.completions = data
                }
            )
    }


//exporting copy of requests
    export const getRequests =() =>{
        return applicationState.requests.map(request =>({...request}))
    }

    //exporting copy of clowns
    export const getClowns =() =>{
        return applicationState.clowns.map(clown =>({...clown}))
    }

    //function that puts the input into the api requests array
    export const sendRequest = (userServiceRequest) => {
        const fetchOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userServiceRequest)
        }
    
    
        return fetch(`${API}/requests`, fetchOptions)
            .then(response => response.json())
            .then(() => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            })
    }

//function that deletes the object in the requests array
    export const deleteRequest = (id) => {
        return fetch(`${API}/requests/${id}`, { method: "DELETE" })
            .then(
                () => {
                    mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
                }
            )
    }

//function that puts the input into the completions array
    export const saveCompletion = (userServiceRequest) => {
        const fetchOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userServiceRequest)
        }
    
    
        return fetch(`${API}/completions`, fetchOptions)
            .then(response => response.json())
            .then(() => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            })
    }