import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios"
import toast from "react-hot-toast";
import { setUserInfo, setType } from "../Redux/reducers/rootSlice";


export function LoginP(){
    const dispatch = useDispatch();
    const [tt, setTt] = useState("");
    const [formDetails,setFormDetails] = useState({
        email: "",
        password:"",
    });
    const inputChange = (e) => {
        const { name, value } = e.target;
        return setFormDetails({
          ...formDetails,
          [name]: value,
        });
      };
      const typeChange = (e) => {
        setTt(e.target.value);
      };
    const navigate = useNavigate();
    const formsubmit = async(e) =>{
        try{
            e.preventDefault();
            const {email, password} = formDetails;
            if(!email || !password){
                return toast.error("Input field should not be empty");
            }
            // const formData = new FormData();
            // formData.append('email',email);
            // formData.append('password',password);
            console.log(email);
            console.log(password);
            // console.log(formData);
            console.log(tt);
            const { data } = await toast.promise(
                axios.post(`http://localhost:3001/auth/${tt}/login`,{
                    email,
                    password
                }
            ),{
                pending: "Logging in...",
                success: "Login successfully",
                error: "Unable to login user",
                loading: "Logging user...",
            }
        );
        localStorage.setItem("token",data.sessionToken);
        dispatch(setUserInfo(data.requiredUser));
        dispatch(setType(tt));
        setFormDetails({
            email:"",
            password:"",
        })
        setTt("");
        navigate('/');

        }catch(error){
            return error;
        }
    };

    return(
        <div>
            <form onSubmit={formsubmit}>
            
                <input type ="email" name = "email" placeholder = "enter your email" value = {formDetails.email} onChange = {inputChange} />
                <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formDetails.password}
            onChange={inputChange}
          />
        <select value= {tt} onChange={typeChange}>
                <option value="doctor">doctor</option>
                <option value="patient">patient</option>
        </select>
        <button
            type="submit"
          >
            sign in
          </button>
            </form>
        </div>
    )
}