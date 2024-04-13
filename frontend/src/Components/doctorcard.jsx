import React, { useState } from "react";
import { toast } from "react-hot-toast";
export const DoctorCard = ({ ele }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [token, setToken] = useState(localStorage.getItem("token") || "");
    const handleModal = () => {
        if (token === "") {
          return toast.error("You must log in first");
        }
        setModalOpen(true);
      };
      return (
        <div>
             <img
            alt = "doctor"
            src = {`http://localhost:3001/assets/${ele.picturePath}`}
            />
            <div>
                {ele.fullName}
            </div>
            <div>
                {ele.specialist}
            </div>
            <div>
                {/* {ele.fee} */}
            </div>

        </div>
        

      )
};