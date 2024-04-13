import axios from "axios";
import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
export function ProfilePage(){
    const { doctorId } = useParams();
    const [user,setUser] = useState(null);
    const [doctor,setDoctor] = useState(null);
    const xyz = JSON.parse(localStorage.getItem('user'));
    setUser(xyz);
    const getDoctor = async()=>{
        const response = await axios.get(`http://localhost:3001/doctor/${doctorId}`,{
            headers : {
                'Authorization': "Bearer " + localStorage.getItem('token').slice(1,-1),
            }
        })
        setDoctor(response.data);
    };
    useEffect(()=>{
        getDoctor();
    },[]);
    return (
        <div>
            <img
             alt="doctor"
             src={`http://localhost:3001/assets/${doctor.picturePath}`}
            
            />
        </div>
    );
}