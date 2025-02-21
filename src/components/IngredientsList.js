import React from "react";

function IngredientsList(prop) {
    console.log(prop.ingredients)

  return (
    <li> {prop.ingredients}</li>
  );
}

export default IngredientsList;