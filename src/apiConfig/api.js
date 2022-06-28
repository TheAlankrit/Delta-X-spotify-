
import axios from "axios";

export const PostArtist  =  async(data) =>{
    try {
        const response = await axios({
            url: `https://musicnodeserver.herokuapp.com/Artist`,
            method: 'POST',
            // headers: {
            //     'Content-Type': 'application/json',
            //     Accept: 'application/json',
            //     Authorization: accessToken,
            // },
            data: data
        });
        return response;
    } catch (error) {
        console.log('Error =>', error);
        if (error.response) {
            return error.response.data;
        }
    }
}


export const FetchArtist  =  async(data) =>{
    try {
        const response = await axios({
            url: `https://musicnodeserver.herokuapp.com/Artist`,
            method: 'GET',
            // headers: {
            //     'Content-Type': 'application/json',
            //     Accept: 'application/json',
            //     Authorization: accessToken,
            // },
        });
        return response;
    } catch (error) {
        console.log('Error =>', error);
        if (error.response) {
            return error.response.data;
        }
    }
}

export const PostSong  =  async(data) =>{
    try {
        const response = await axios({
            url: `https://musicnodeserver.herokuapp.com/Songs`,
            method: 'POST',
            // headers: {
            //     'Content-Type': 'application/json',
            //     Accept: 'application/json',
            //     Authorization: accessToken,
            // },
            data: data
        });
        return response;
    } catch (error) {
        console.log('Error =>', error);
        if (error.response) {
            return error.response.data;
        }
    }
}

export const FetchSongs  =  async(data) =>{
    try {
        const response = await axios({
            url: `https://musicnodeserver.herokuapp.com/Songs`,
            method: 'GET',
            // headers: {
            //     'Content-Type': 'application/json',
            //     Accept: 'application/json',
            //     Authorization: accessToken,
            // },
        });
        return response;
    } catch (error) {
        console.log('Error =>', error);
        if (error.response) {
            return error.response.data;
        }
    }
}
