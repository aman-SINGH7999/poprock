import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AllProduct from "./components/AllProduct";
import BestPrice from "./components/BestPrice";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="overflow-hidden">
        <Navbar></Navbar>
        <Hero></Hero>
        <AllProduct></AllProduct>
        <BestPrice></BestPrice>
        <Footer></Footer>
    </div>
  );
}

export default App;
