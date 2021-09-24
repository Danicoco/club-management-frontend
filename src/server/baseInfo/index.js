//replace with your api link
export const baseURL = "https://club-management-backend.herokuapp.com/api/v1";
export const config = {
    headers: {
        'Content-Type': "application/json",
        'x-auth-token': localStorage.getItem('token')
    }
}