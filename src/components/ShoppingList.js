import { useState } from "react"
import { plantList  } from "../datas/plantList"
import PlantItem from "../components/PlantItem"
import Categories from "./Categories"
import '../styles/ShoppingList.css'

export default function ShoppingList({ cart, updateCart, isOpen, setIsOpen, option, setOption}){
    
const [activeCategory, setActiveCategory]= useState('')

    // returns only 1 occurence of categories ( since multiple plants can belong to the same categp)
    const categories = plantList.reduce(
		(acc, plant) =>
            
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

	function handleClick(){
		updateCart(cart+1)
		setIsOpen(true)
	}

	return (
		<div className="lmj-shopping-list">
			{/* <ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul> */}

			<Categories categories={categories} setActiveCategory={setActiveCategory} activeCategory={activeCategory}/>
			<ul className="lmj-plant-list">
				{plantList.map(({name,id,cover,light,water, category}) => 
				//if there's no category selecte then show everything, else show selected 
				!activeCategory || activeCategory === category?(
										
				<div key={id} >
					{console.log(category, activeCategory)}
					<PlantItem name={name} cover={cover} id={id} light={light} water={water}/>
					<button onClick={() => handleClick()}>Ajouter</button>
				</div>):null
				)}
			</ul>
		</div>
	)
}

