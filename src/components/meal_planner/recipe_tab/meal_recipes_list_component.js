import React, { useContext } from "react";
import MealPlannerContext from "context/meal_planner_context";
import RecipeDetails from "components/recipes/recipe_details";

function MealRecipeListComponent() {
  const { mealPlanner } = useContext(MealPlannerContext);
  return (
    <>
      {mealPlanner && Object.values(mealPlanner).map((meal, index) => {
        return (
          <div key={index}>
            {Object.values(meal.Breakfast).length > 0 ? <RecipeDetails meal={meal.Breakfast} /> : null}
            {Object.values(meal.Lunch).length > 0 ? <RecipeDetails meal={meal.Lunch} /> : null}
            {Object.values(meal.Dinner).length > 0 ? <RecipeDetails meal={meal.Dinner} /> : null}
            <br />
          </div>
        );
      })}
    </>
  );
}

export default MealRecipeListComponent;