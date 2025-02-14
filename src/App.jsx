import { BrowserRouter, Routes, Route } from "react-router-dom";
import { EmailProvider } from "./context/EmailContext";

import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <EmailProvider>
        <div className="main-container bg-gradient-to-b from-blue-body/50 to-white">
          <Routes>
            <Route path="/" element={<Home />} />
            
          </Routes>
        </div>
      </EmailProvider>
    </BrowserRouter>
  );
}

export default App;
