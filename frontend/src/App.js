import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignupP from "./Pages/SignupP.jsx";
import SignupD from "./Pages/SignupD.jsx";
import { Sidebar } from "./components/SidebarD.jsx";
import { Landing } from "./Pages/Landing/Landing";
import { LoginP } from "./Pages/LoginP.jsx";
import { Dashboard } from "./Pages/Dasboard/Dashboard.jsx";
import { Toaster } from "react-hot-toast";
import { Doctors } from "./Pages/doctors.jsx";
import { DashboardP } from "./Pages/Dasboard/DashboardP.jsx";
import Treatment from "./components/Report.jsx";
import { Notifications } from "./components/Notifications.jsx";
import { PatientAPP } from "./Pages/PatientAPP.jsx";
import { ChatTest } from "./Pages/ChatTest.jsx";
import { ViewReport } from "./components/viewreport.jsx";
import { About } from "./Pages/AboutUs.jsx";
import { Card } from "./components/commoncomp.jsx";

import { Docappointments } from "./Pages/Docappointments.jsx";
import { AboutPage } from "./components/aboutpage.jsx";
import { ViewAllReport } from "./Pages/ViewallReport.jsx";
import ImageUploader from "./Pages/check.jsx";

import { MyDoctors } from "./Pages/Mydoctors.jsx";
import LobbyScreen from "./screens/Lobby";
import RoomPage from "./screens/Room";
import { ProfilePage } from "./Pages/Doctor/Doctor_Desciption.jsx";
import { ProfilePages } from "./Pages/Patient_Profile.jsx";
import { ProfileDoc } from "./Pages/Doctor_Profile.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { NavbarD } from "./components/NavbarD.jsx";
import { Apprequest } from "./Pages/Apprequest.jsx";
import { Requests } from "./Pages/Requestpage.jsx";
import { AnalogClock }from "./Pages/clockpage.jsx"
const URL =
  process.env.NODE_ENV === "production" ? undefined : "http://localhost:4000";

console.log(URL);
function App() {
  return (
    // <Router>
    <div>
      <Toaster />
      <Routes>
        <Route path="/login"
          element={<LoginP />}
        >
        </Route>
        <Route path="/video" element={<LobbyScreen />} />
        <Route path="/room/:roomId" element={<RoomPage />} />
        <Route
          path="/report/:doctorId/:patientId"
          element={<Treatment />}
        ></Route>
        <Route path="/doctor/:doctorId" element={<ProfilePage />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/signup/patient" element={<SignupP />}></Route>
        <Route path="/signup/doctor" element={<SignupD />}></Route>
        <Route path="/home" element={<Navbar />}></Route>
        <Route path="/doctors" element={<Doctors />}></Route>
        <Route path="/dashboardP" element={<DashboardP />}></Route>
        <Route path="/PatientAPP" element={<PatientAPP />}></Route>
        <Route path="/notificationsP" element={<Notifications />}></Route>
        <Route path="/abt" element={<AboutPage />}></Route>
   



        <Route path="/MyDoctors"
        element={<MyDoctors/>}
        ></Route>
        <Route path="/apprequest"
        element={<Apprequest/>}
        ></Route>
         
         <Route path="/Prof"
        element={<ProfilePages/>}
        ></Route>
        
        <Route path="/Requests"
        element={<Requests/>}
        ></Route>
       <Route path="/docappointments"
        element = {<Docappointments/>}
        ></Route>

        

        

        <Route path="/About" element={<About />}></Route>
        <Route
          path="/viewreport/:doctorId/:patientId"
          element={<ViewReport />}
        ></Route>
        <Route path="/Profd" element={<ProfileDoc />}></Route>
        <Route path="/chat/:patientId/:doctorId" element={<ChatTest />}></Route>
        <Route path="/common/:doctorId/:patientId" element={<Card />}></Route>
        <Route path="/clk" element={<AnalogClock/>}></Route>

      </Routes>
    </div>
  );
}

export default App;
