import { Routes, Route } from "react-router-dom";
import Landing from "./containers/Landing/Landing";

const App: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Landing />} />
        </Routes>
    );
};

export default App;
