import { BrowserRouter, Route, Routes } from "react-router-dom";
import Joplist from "./pages/joplist";
import Addjops from "./pages/addjops";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  return (

    <BrowserRouter>
      <Header />
      <Routes>

        <Route path="/" element={<Joplist />} />
        <Route path="/add-jop" element={<Addjops />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
