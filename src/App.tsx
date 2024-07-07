import Home from "./pages/Home/Home";
import "./App.css";
import Alic_Console from "./pages/Alic/Alic_Console";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                {/* ... */}
            </Routes>


            {/* PROTECTED ROUTES */}
            <Routes>
                <Route path="/alec_console" element={   <Alic_Console />} />
                {/* ... */}
            </Routes>
         
        </div>
    );
}

export default App;
