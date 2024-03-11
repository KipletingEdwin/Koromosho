
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Ministries from "./components/Ministries/Ministries";
import Notices from "./components/Notices/Notices";


function LandingPage() {
  return (
    <div >
     
      <Home />
      <About />
      <Ministries />
      <Notices />
      <Contact />
     
    </div>
  );
}

export default LandingPage;
