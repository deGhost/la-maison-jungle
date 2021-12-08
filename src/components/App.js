import Banner from "./Banner";
import Cart from "./Cart";
import Footer from "./Footer";
import ShoppingList from "./ShoppingList";
import Categories from "./Categories"
import logo from "../assets/logo.png"
import "../styles/layout.css"
import { useState } from "react"

function App() {
  const title = "La maison jungle"
  const[cart,updateCart]=useState(0)
  const[isOpen,setIsOpen]=useState(false)
  const [option, setOption] = useState("")

  return (
    <div>
    <Banner>
            <img src={logo} alt="La maison jungle" className="lmj-logo" />
            <h1 className="lmj-title">{title}</h1>
    </Banner>
    
    <div className="lmj-layout-inner">
    <Cart cart={cart} updateCart={updateCart} isOpen={isOpen} setIsOpen={setIsOpen} />
    <ShoppingList cart={cart} updateCart={updateCart} isOpen={isOpen} setIsOpen={setIsOpen} option={option} setOption={setOption}/>
    </div>
    <Footer />
    </div>
  );
}

export default App;
