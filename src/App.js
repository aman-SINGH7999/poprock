import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AllProduct from "./components/AllProduct";
import BestPrice from "./components/BestPrice";
import Footer from "./components/Footer";
import BgTop from "./components/BgTop";
import BgBottom from "./components/BgBottom";


function App() {
  return (
    <div className="overflow-hidden">
        <BgTop></BgTop>
        <Navbar></Navbar>
        <Hero></Hero>
        <AllProduct></AllProduct>
        <BestPrice></BestPrice>
        <BgBottom></BgBottom>
        <Footer></Footer>
    </div>
  );
}

export default App;
