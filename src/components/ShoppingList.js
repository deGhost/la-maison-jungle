import { useState} from 'react'
import { plantList } from '../datas/plantList'
import PlantItem from './PlantItem'
import Categories from './Categories'
import '../styles/ShoppingList.css'

function ShoppingList({ cart, updateCart }) {
	
	const [activeCategory, setActiveCategory] = useState('')
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

	
	function addToCart(name, price) {
		const currentPlantSaved = cart.find((plant) => plant.name === name)
		// currentPlantSaved : cart list that contains the name selected
		
		if (currentPlantSaved) {
			//if there is a plant selected
			
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name,
				//if currentSelectedPlan is reselected add 1 to its previous value
				console.log("currentPlantSaved: ", currentPlantSaved)
			)
			{console.log("cart: ",cart)}
			{console.log("...cartFilteredCurrentPlant: ",...cartFilteredCurrentPlant)}
			
			// get all the previous added plants filtered and the current one +1
			updateCart([
				...cartFilteredCurrentPlant,
				{ name, price, amount: currentPlantSaved.amount + 1 }
				
			])
		
		} else {
			updateCart([...cart, { name, price, amount: 1 }])
			
		}

	}

	return (
		<div className='lmj-shopping-list'>

			
			<Categories
				categories={categories}
				setActiveCategory={setActiveCategory}
				activeCategory={activeCategory}
			/>

			<ul className='lmj-plant-list'>
				{plantList.map(({ id, cover, name, water, light, price, category }) =>
					!activeCategory || activeCategory === category ? (
						<div key={id}>
							<PlantItem
								cover={cover}
								name={name}
								water={water}
								light={light}
								price={price}
							/>
							
							<button onClick={() => addToCart(name, price)}>Ajouter</button>
						</div>
					) : null
				)}
			</ul>
		</div>
	)
}

export default ShoppingList