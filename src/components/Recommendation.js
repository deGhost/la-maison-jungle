export default function Recommendation(){
    const currentMonth = new Date().getMonth()
    const isSpring = currentMonth >= 2 && currentMonth <= 5
    console.log(currentMonth) // in JS months start from 0

    if(!isSpring){
        return <div>Ce n'est pas le moment de rempoter </div>
    }
        return <div>C'est le printemps, rempotez 🌱</div>

}