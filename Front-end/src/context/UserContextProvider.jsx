import React, { useState,useEffect } from "react";
import UserContext from "./UserContext";
import axios from "axios";

const UserContextProvider = ({children}) => {

  const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/event');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    
    const [eventData, setEventData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/event/?`);
                setEventData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);


    return (
          <UserContext.Provider value = {{data,eventData}}>
          {children}
          </UserContext.Provider>
    )

}

export default UserContextProvider;