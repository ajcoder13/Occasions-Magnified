import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home"; // assuming About.jsx exists
import OMAG from "./Components/OMAG"; // assuming OMAG.jsx exists
import OurServices from "./Components/OurServices";
import ServicesPage from "./Components/ServicesPage";
import Founder from "./Components/Founder"; // assuming ServicesPage.jsx exists
import Testimonial from "./Components/Testimonial";
import Explore from "./Components/Explore";
import Omag_main from "./Components/Omag_main";
import ShopCustoms from "./Components/ShopCustoms";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<div>About Page</div>} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/services" element={<div>Services Page</div>} />
        <Route path="/portfolio" element={<div>Portfolio Page</div>} />
        <Route path="/ourservices" element={<OurServices />} />
        <Route path="/servicespage" element={<ServicesPage />} />~
        <Route path="/founder" element={<Founder />} />
        <Route path="/omagg" element={<OMAG />} />
        <Route path="/omag" element={<Omag_main />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/shopcustoms" element={<ShopCustoms />} />
        <Route path="/contact" element={<div>Contact Us Page</div>} />
      </Routes>
    </Router>
  );
}

export default App;
