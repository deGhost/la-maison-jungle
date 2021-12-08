import { useState } from 'react'
import '../styles/Footer.css'

export default function Footer() {
	const [inputValue, setInputValue] = useState('')

    function handleChange(value){
        setInputValue(value)
    }
    function handleSubmit(){
        
        if( !inputValue.includes('@') ){
            alert("Attention, il n'y a pas d'@, ceci n'est pas une addresse valide.")
        }
        else alert("Envoyé!")
    }
	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
            <textarea type='text' placeholder='email@mail.fr' value={inputValue} onChange={(e) => {handleChange(e.target.value)}}/>
            <button onClick={handleSubmit}>Envoyer</button>
		</footer>
	)
}