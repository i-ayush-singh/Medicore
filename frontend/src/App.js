import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignupP from "./Pages/SignupP.jsx";
import SignupD from "./Pages/SignupD.jsx";
import { Sidebar } from "./Components/SidebarD.jsx";
import { Landing } from './Pages/Landing/Landing';
import { LoginP } from "./Pages/LoginP.jsx";
import { Dashboard } from "./Pages/Dasboard/Dashboard.jsx";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <Router>
      <Toaster/>
      <Routes>
        <Route path="/login/patient"
        element={<LoginP/>}
        >
        
        </Route>
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
        {/* <Route path="/"
        element={<Home/>}
        ></Route>
        <Route path="/doctors"
        element={<Doctors/>}
        ></Route> */}

      </Routes>
    </Router>
  );
}

export default App;
