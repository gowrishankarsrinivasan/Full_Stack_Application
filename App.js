import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/loginPage";
import Signup from "./components/signup";
import Container from "./components/subComponents/Container";
import Invoice from "./components/subComponents/invoice";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/home" element={<Container />} />
          <Route path="/contact" element={<Container />} />
          <Route path="/aboutUs" element={<Container />} />
          <Route path="/profile" element={<Container />} />
          <Route path="/product" element={<Container />} />
          <Route path="/billing" element={<Container />} />
          <Route path="/pay" element={<Container />} />
          <Route path="/dealer" element={<Container />} />
          <Route path="/catalog" element={<Container />} />
          <Route path="/invoice" element={<Invoice />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


