import axios from 'axios';
import { config, baseURL } from '../baseInfo';

export const registerUser = async(values) => {
    try {
        const response = await axios.post(`${baseURL}/users`, values);
        return response.data;
    } catch (error) {
        console.log(error.message);
        if(error.response) throw new Error(error.response.data.message);
        if(!error.response) throw new Error("There is an issue with your internet connection");
    }
}


export const getDashboardDetail = () => {
    try {
        const response = axios.get(`${baseURL}/user/dashboard`, config);
        return response.data.data;
    } catch (error) {
        if(error.response) throw new Error(error.response.data.message);
        if(!error.response) throw new Error("There appears to be an issue with your network connection");
    }
}

export const addClub = async (values) => {
    try {
        const response = await axios.post(`${baseURL}/clubs`, values, config);
        return response.data;
    } catch (error) {
        console.log(error.response);
        if(error.response) throw new Error(error.response.data.message);
        if(!error.response) throw new Error("There appears to be an issue with your network connection");
    }
}

export const allClubs = async () => {
    try {
        const response = await axios.get(`${baseURL}/clubs`, config);
        return response.data;
    } catch (error) {
        if(error.response) throw new Error(error.response.data.message);
        if(!error.response) throw new Error(error.message);
    }
}

export const allMembers = async () => {
    try {
        const response = await axios.get(`${baseURL}/clubs/members`, config);
        return response.data.data;
    } catch (error) {
        if(error.response) throw new Error(error.response.data.message);
        if(!error.response) throw new Error(error.message);
    }
}

export const clubMembers = async ({id}) => {
    try {
        const response = await axios.get(`${baseURL}/clubs/my-members/${id}`, config);
        return response.data.data;
    } catch (error) {
        if(error.response) throw new Error(error.response.data.message);
        if(!error.response) throw new Error(error.message);
    }
}


export const inviteMembers = async ({ username, id }) => {
    try {
        const response = await axios.get(`${baseURL}/clubs/members/invite/${username}/${id}`, config);
        return response.data.message;
    } catch (error) {
        if(error.response) throw new Error(error.response.data.message);
        if(!error.response) throw new Error(error.message);
    }
}

export const removeMembers = async ({ id }) => {
    try {
        const response = await axios.delete(`${baseURL}/clubs/members/remove/${id}`, config);
        return response.data.message;
    } catch (error) {
        if(error.response) throw new Error(error.response.data.message);
        if(!error.response) throw new Error(error.message);
    }
}

export const deleteClubs = async ({ id }) => {
    try {
        const response = await axios.delete(`${baseURL}/clubs/delete-club/${id}`, config);
        return response.data;
    } catch (error) {
        if(error.response) throw new Error(error.response.data.message);
        if(!error.response) throw new Error(error.message);
    }
}