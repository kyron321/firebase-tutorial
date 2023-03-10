import { Link } from "react-router-dom"
import "./RecipeList.css"
import Trashcan from "../assets/trashcan.svg"
import { projectFirestore } from "../firebase/config"


export default function RecipeList({recipes}) {

  if(recipes.length === 0){
    return <div className="error">No recipes to load :(</div>
  }

const handleClick= (id)=>{
  projectFirestore.collection("recipes").doc(id).delete()
}

  return (
    <div className="recipe-list">
        {recipes.map(recipe =>(
            <div key={recipe.id} className="card">
                <h3>{recipe.title}</h3>
                <p>{recipe.cookingTime} to make.</p>
                <div>{recipe.method.substring(0,100)}...</div>
                <Link to={`/recipes/${recipe.id}`}>Cook This</Link>
                <img src={Trashcan} className="delete" onClick={()=> handleClick(recipe.id)} alt="bin"></img>
            </div>
        ))}
    </div>
  )
}
