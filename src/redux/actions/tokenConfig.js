export const tokenConfig = getState => {
    //request to backend
    const token = getState().auth.token;

    //add token to headers
    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }

    //if token is avaliable, add to headers
    if(token) {
        //add the jwt token identifier on your server
        config.headers['x-auth-authorization'] = token;
        return config;
    }

    return config;
} 