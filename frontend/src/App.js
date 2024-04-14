import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignupP from "./Pages/SignupP.jsx";
import SignupD from "./Pages/SignupD.jsx";
import { Sidebar } from "./components/SidebarD.jsx";
import { Landing } from './Pages/Landing/Landing';
import { LoginP } from "./Pages/LoginP.jsx";
import { Dashboard } from "./Pages/Dasboard/Dashboard.jsx";
import { Toaster } from "react-hot-toast";
import { Doctors } from "./Pages/doctors.jsx";
import { DashboardP } from "./Pages/Dasboard/DashboardP.jsx";

import { MyDoctors } from "./Pages/Mydoctors.jsx";

import { ProfilePage } from "./Pages/Doctor/Doctor_Desciption.jsx";

import { Navbar } from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Toaster/>
      <Routes>
        <Route path="/login"
        element={<LoginP/>}
        >
        </Route>
        <Route path="/doctor/:doctorId" element={<ProfilePage/>}></Route>
        <Route path="/dashboard"
        element={<Dashboard/>}
        ></Route>
        <Route path="/"
        element = {<Landing/>}></Route>
        <Route path="/signup/patient"
        element={<SignupP/>}
        ></Route>
        <Route path="/signup/doctor"
        element={<SignupD/>}
        ></Route>
        <Route path="/home"
        element={<Navbar/>}
        ></Route>
        <Route path="/doctors"
        element={<Doctors/>}
        ></Route>
        <Route path="/dashboardP"
        element={<DashboardP/>}
        ></Route>
        <Route path="/MyDoctors"
        element={<MyDoctors/>}
        ></Route>
       

      </Routes>
    </Router>
  );
}

export default App;
