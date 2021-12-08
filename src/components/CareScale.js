
export default function CareScale({scaleValue, careType}) {
    const scaleType = careType === 'light' ? '☀️' : '💧' 
    const range =[1,2,3]
    
    function handleClick(){
        scaleValue === 1 && alert(`Cette plante requiert peu d'arrosage, le type CareScale est ${careType}`)
        scaleValue === 2 && alert(`Cette plante requiert modérement d'arrosage, le type CareScale est ${careType}`)
        scaleValue === 3 && alert(`Cette plante requiert beaucoup d'arrosage, le type CareScale est ${careType}`)

    }
    return (
        <div onClick={handleClick}>{range.map((rangeElement) =>
            scaleValue >= rangeElement? <span key={rangeElement.toString()}>{scaleType}</span> : null)}</div>
    )
}
