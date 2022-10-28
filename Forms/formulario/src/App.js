import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import {Login} from "./pages/login"
import {Cadastro} from "./pages/cadastro"
import {Dashbord} from "./pages/dashbord"

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashbord" element={<Dashbord />} />
            </Routes>
        </Router>
    )
};

export { App };
