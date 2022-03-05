import {useState} from 'react'
export default function QuestionForm() {

    const [inputValue, setInputValue] = useState("Posez votre question..")

    function handleSubmit(){
        alert(inputValue)
    }
    function checkValue(value){
        if(!value.includes('f')){
            setInputValue(value)
        }
    }
    return (
        <div>
            <textarea 
            value={inputValue}
            onChange={(e) => {checkValue(e.target.value)}}
            
            />
            <button onClick={handleSubmit}>Entrer</button>
        </div>
    )
}
