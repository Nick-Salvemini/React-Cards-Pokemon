import React, { useState } from "react";
import axios from "axios";
import uuid from "uuid";

const useAxios = () => {
    const [state, setState] = useState([])

    const addToState = async (url) => {
        try {
            const response = await axios.get(url);
            const newData = { ...response.data, id: uuid() }
            setState([...state, newData]);
            return response;
        } catch (error) {
            console.error("Error fetching data:", error)
        }
    }

    return [state, addToState]
}

export default useAxios;