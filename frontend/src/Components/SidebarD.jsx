import React,{ useEffect, useState } from "react";
import { useSelector } from "react-redux"

export function Sidebar(){
    const [user,setUser] = useState({});
    const { userInfo } = useSelector(( state ) =>  state.root);
    
    return (
        <div >
            <img
            alt = "doctor"
            src = {`http://localhost:3001/assets/${userInfo.picturePath}`}
            />
        </div>
    );
}