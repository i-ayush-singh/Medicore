import React from "react";
import { Request } from "../components/RequestCard"
import axios from "axios";
import { useEffect, useState } from "react";
export function Requests(){
    const [patreq, setPatreq] = useState([]);
    const doctor = JSON.parse(localStorage.getItem('user'));
    const fetchpatreq = async () => {
        try{
            let req = await axios.get(`http://localhost:3001/doctor/getallrequests/${doctor._id}`, {
                headers: {
                    'Authorization': "Bearer " + localStorage.getItem('token').slice(1,-1),
                },
            });

            setPatreq(req.data);
        } catch(error){
            console.log(error);
        }

       
      };
    useEffect(() => {
        fetchpatreq();
      }, []);

return (
    <div class="bg-slate-800">
        <div class="p-20 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 h-full">
        
        {patreq.map((ele) => {
              return (
                <div class="p-3">
                <Request
                  ele={ele}
                /></div>
              );
            })}
        </div>
    </div>
    )
}