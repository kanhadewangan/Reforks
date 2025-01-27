import "./App.css";
import Nav from "./components/Nav";
import Work from "./components/Work";
import Strips from "./components/Strips";
import Products from "./components/Products";

import Markquee from "./components/Markquee";
function App() {
  return (
    <>
      <div className='w-full h-full bg-zinc-900 text-["satoshi"]'>
        <Nav />
        <Work />
        <Strips />
        <Products />
        <Markquee />
      </div>
    </>
  );
}

export default App;
