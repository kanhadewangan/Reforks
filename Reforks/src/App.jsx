import "./App.css";
import Nav from "./components/Nav";
import Work from "./components/Work";
import Strips from "./components/Strips";
import Products from "./components/Products";
import Footer from "./components/Footer";
import Markquee from "./components/Markquee";
import Cards from "./components/Cards";
function App() {
  return (
    <>
      <div className='w-full h-full bg-zinc-900 text-["satoshi"]'>
        <Nav />
        <Work />
        <Strips />
        <Products />
        <Markquee />
        <Cards/>
      <Footer />
      </div>
    </>
  );
}

export default App;
