import "../styles/Categories.css"
export default function Categories({ activeCategory, setActiveCategory, categories}) {


    return (
        <div className='lmj-categories'>
            <select id="categories" value={activeCategory}
             onChange={(e) => setActiveCategory(e.target.value)}
             className='lmj-categories-select'
            >
                <option value="">---</option>
                 {categories.map((cat)=>(
                     <option key={cat.id} value={cat.id}>   
                        {cat}
                    </option>
                 )) 
                 }
            </select>
            <button onClick={() => setActiveCategory('')}  className="lmj-button">Réinstaliser</button>
        </div>
    )
}
