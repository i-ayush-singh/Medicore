import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast"
export default function SignupD(){
    const [loading, setloading] = useState(false);
    const [formdetails, setFormdetails] = useState({
        fullName: "",
        email: "",
        password: "",
        location:"",
        fee:"",
        specialist:"",
    })
    const navigate =useNavigate();
    const inputChange=(e)=>{
        const { name, value } = e.target;
        return setFormdetails({
            ...formdetails,
            [name]:value,
        });
    };


    const [currentFile, setCurrentFile] = useState(null);
    const handleFileChange = (event) => {
        setCurrentFile(event.target.files[0]);
    }
    const formSubmit = async (e) => {
        try{
            if (loading) return;
            const { fullName, email, password, location,fee,specialist} =
        formdetails;
        if (!fullName || !location || !email || !password || !fee || !specialist ) {
            return toast.error("Input field should not be empty");
          }
          const formData = new FormData();
          formData.append('picture',currentFile);
          formData.append('fullName',fullName);
          formData.append('password',password);
          formData.append('email',email);
          formData.append('location',location);
          formData.append('specialist',specialist);
          formData.append('fee',fee);
          formData.append('picturePath',currentFile.name);
          console.log(formData);
          await toast.promise(
            axios.post("http://localhost:3001/auth/doctor/register", formData,{
                headers : {
                    'Content-Type': 'multi/form-data',
                },
              }),
            {
              pending: "Registering user...",
              success: "User registered successfully",
              error: "Unable to register user",
              loading: "Registering user...",
            }
          );
          return navigate("/login/doctor");

        }catch(error){
            console.log(error);
        }
        

    }
    return(
        <section className="register-section flex-center">
            <div className="register-container flex-center">
            <h2 className="form-heading"> Sign Up Doctor</h2>
            <form onSubmit={formSubmit} className="register-form">
            <input
                    type="text"
                    name="fullName"
                    className="form-input"
                    placeholder="Enter your name"
                    value={formdetails.fullName}
                    onChange={inputChange}
          />
          <input
            type="email"
            name="email"
            className="form-input"
            placeholder="Enter your email"
            value={formdetails.email}
            onChange={inputChange}
          />
          <input
            type="password"
            name="password"
            className="form-input"
            placeholder="Enter your password"
            value={formdetails.password}
            onChange={inputChange}
          />
          <input
            type="text"
            name="location"
            className="form-input"
            placeholder="location"
            value={formdetails.location}
            onChange={inputChange}
          />
          <input
            type="text"
            name="specialist"
            className="form-input"
            placeholder="specialist"
            value={formdetails.specialist}
            onChange={inputChange}
          />
          <input
            type="text"
            name="fee"
            className="form-input"
            placeholder="fee"
            value={formdetails.fee}
            onChange={inputChange}
          />
           <input type="file" onChange={handleFileChange}  />
           <button onClick={formSubmit}>Register</button>

            </form>
            </div>
        </section>
    )

}