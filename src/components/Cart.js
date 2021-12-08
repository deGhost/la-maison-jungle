import "../styles/Cart.css"
import { useState } from "react"

export default function Cart({ cart, updateCart, isOpen,setIsOpen }){
const monsteraPrice = 8



return isOpen? (

    <div className='lmj-cart'>
        <button onClick={()=>setIsOpen(false)}>Fermer</button>
        <h2>Panier</h2>
        <div>
            Monstera : {monsteraPrice} $
            <button onClick={() => updateCart(0)}>Vider le panier</button>
        </div>
        <h3>Total: {monsteraPrice * cart}$</h3>

    </div>
) : (
    <div className="lmj-cart-closed">
        <button  onClick={()=> setIsOpen(true)} className="lmj-cart-toggle-button">Ouvrir le panier</button>
        </div>
)

}