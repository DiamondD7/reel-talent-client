const API_URL = import.meta.env.VITE_API_URL;
let refreshPromise = null;

async function refreshSession(){
    if(!refreshPromise){
        refreshPromise = fetch(`${API_URL}/api/auth/refresh`, {
            method:"POST",
            credentials:"include"
        })
        .then(()=>res.ok)
        .catch(() => false)
        .finally(()=>{
            refreshPromise = null;
        });

        
    }

    return refreshPromise
}

export async function apiFetch(path, options={}){
    const url = `${API_URL}${path}`;
    const config = {...options, credentials: "include"};

    let res = await fetch(url, config);

    if(res.status !== 401) return res;

    const refreshed = await refreshSession();

    if(!refreshed){
        //goes back to login if refresh failed 401
        window.location.href = "/";
        return res;
    }

    return fetch(url, config);
}