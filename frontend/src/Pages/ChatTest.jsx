// import { useEffect } from "react";

import React, { useState , useEffect} from "react";
import { useParams } from "react-router-dom"
import { io } from "socket.io-client";

const message = (props) => {
    return (<p>{props.contents}</p>);
}
export const ChatTest = () => {
    
    const [messages, setMessages] = useState([]);
    const [roomId, setRoomId] = useState("");
    const {patientId, doctorId} = useParams();
    const [doctor, setDoctor] = useState({});
    const [patient, setPatient] = useState({});
    const socket = io.connect("http://localhost:3001");

    useEffect( () => {
        const setUsers = async () => {
            const doctorObj = await axios.get(`http://localhost:3001/doctor/getDoctor/${doctor}`, {
                        headers: {
                            'Authorization': "Bearer " + localStorage.getItem('token').slice(1,-1),
                        },
            });

            const patientObj = await axios.get(`http://localhost:3001/patient/getPatient/${patient}`, {
                        headers: {
                            'Authorization': "Bearer " + localStorage.getItem('token').slice(1,-1),
                        },
            });
            
            setDoctor(doctorObj.data);
            setPatient(patientObj.data);
            
            const room = doctor._id.substring(0,12) + patient._id.substring(0,12);

            room.sort();

            setRoomId(room);
        }

        setUsers();
    });

    const emitter = () => {
        console.log("here");
        socket.emit('click');
    }

    return(
        <p onClick={emitter}>Hello World</p>
    );
};