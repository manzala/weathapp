import axios from "axios";

const API_KEY = "81bc6b5ec985a129f13627f54258ea22";
const URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const addCityAsync = newCity => {
    return { type: "ADD_CITY", payload: newCity };
};


export const addCity = newCity => {
    const promise = axios({
        url: `${URL}&q=${newCity}`,
        method: "get"
    });
    return function (dispatch) {
        return promise
            .then(res => {
                dispatch(addCityAsync(res));
                return res;
            })
            .catch(error => {
                //dispatch("");
                return error;
            });
    };
}

export const removeCity = city => {
    return { type: "REMOVE_CITY", payload: city}
}