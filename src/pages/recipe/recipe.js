import { useParams } from "react-router-dom";

import "./Recipe.css";
import { useEffect, useState } from "react";
import { projectFirestore } from "../../firebase/config";

export default function Recipe() {
  const { id } = useParams();

  const [recipe,setRecipe] = useState(null)
  const[isPending,setIsPending] = useState(false)
  const [error,setError] = useState(false)

  useEffect(()=>{
    setIsPending(true)
    projectFirestore.collection("recipes").doc(id).get().then((doc)=>{
      if(doc.exists){
        setIsPending(false)
        setRecipe(doc.data())
      }else{
        setIsPending(false)
        setError("could not find recipe")
      }
    })
  },[id])

const handleClick = ()=>{
  projectFirestore.collection("recipes").doc(id).update({
    title: "something completely different"
  })
}

  return (
    <div className="recipe">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {recipe && (
        <>
          <h2 className="page-title">{recipe.title}</h2>
          <p>Takes {recipe.cookingTime} to cook.</p>
          <ul>
            {recipe.ingredients.map((ing) => (
              <li key={ing}>{ing}</li>
            ))}
          </ul>
          <p className="method">{recipe.method}</p>
          <button onClick={handleClick}>Update Me</button>
        </>
      )}
    </div>
  );
}
