import React from "react"
import ClaudeRecipe from "./ClaudeRecipe"
import IngredientsList from "./IngredientsList"
import { getRecipeFromMistral } from "./ai"

function Main() {
  const [ingredients, setIngredients] = React.useState([])
  const [recipe, setRecipe] = React.useState("")

  const recipeSection = React.useRef(null)
  console.log(recipeSection)

  React.useEffect(() => {
    if (recipe !== "" && recipeSection.current !== null){
      recipeSection.current.scrollIntoView(
        {behavior:"smooth"}
      )
      // The {behavior:"smooth"} worked here so no need for the below code.
      
      // const yCoord = recipeSection.current.getBoundingClientRect().top
      // window.scroll({
      // top: yCoord,
      // behavior: "smooth"
      // })

    }
  }, [recipe])


    const ingredientsListItems = ingredients.map(ingredient =>  
      <IngredientsList key={ingredient} ingredients={ingredient}/>
    )

    // function extraCode(event) {
    //   event.preventDefault()
    // }

    function handleSubmit(event) {
    event.preventDefault()
    const formEl = event.currentTarget
    const formData = new FormData(formEl)
    console.log(formData)
    const newIngredient = formData.get("ingredient")

    setIngredients(prevIngredients => [...prevIngredients, newIngredient])

    formEl.reset()
    }

    async function getRecipe() {

    const RecipeMarkdown = await getRecipeFromMistral(ingredients)

    setRecipe(RecipeMarkdown)

      // setRecipeShown(prevRecipe => !prevRecipe)
    }


  return (
    <main className="main">
      <form 
      className="add-ingredient-form"
      // action={addIngredient} I was suppposed to ouse action but (I think) action is not working for my Version of react.
      onSubmit={handleSubmit}
      >
      <input 
      type="text"
      placeholder="e.g: Oregano"
      aria-label="Add Ingredient"
      name="ingredient"
      defaultValue="Bread"
      />
      <button>Add ingredients</button>
      </form>

      {ingredients.length > 0 && 
        <section>
        <h2>Ingredients on hand:</h2>
        <ul className="ingredients-list" aria-live="polite">
        {ingredientsListItems}
        </ul>
      
     {ingredients.length> 2 && <div className="get-recipe-container"
     ref={recipeSection}
     >
      <div>
      <h3>Ready for a recipe?</h3>
      <p>Generate a recipe from your list of ingredients.</p>
      </div>
      <button onClick={getRecipe}>Get a recipe</button>
      </div>}
      </section>
      }


      {recipe && <ClaudeRecipe recipe = {recipe}/>}

    </main>
  );
}

export default Main;