import {useState} from 'react'
import CareScale from "./CareScale"
import "../styles/PlantItem.css"
export default function PlantItem({name, cover, id, light, water}) {


    return (
        
           <li className="lmj-plant-item"  > 
                <img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
                 {name}
           <div>
                    <CareScale careType='water' scaleValue={water} /> 
                    <CareScale careType='light' scaleValue={light} />
            </div>
            </li>
       
    )
}
