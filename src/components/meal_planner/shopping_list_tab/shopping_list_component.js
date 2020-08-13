import React, { useContext, useEffect, useState } from "react";
import MealPlannerContext from "context/meal_planner_context";
import { Typography } from "antd";

const { Title } = Typography;

function ShoppingListComponent() {
  const { mealPlanner } = useContext(MealPlannerContext);
  const [ shoppingList, setShoppingList] = useState({
    "baking": [],
    "dairy": [],
    "pantry": [],
    "eggs": [],
    "fats_oils": [],
    "nuts_seeds": [],
    "spice_seasonings": []
  });
  useEffect(() => {
    Object.values(mealPlanner).map((mealList) => {
      Object.values(mealList).map((meal) => {
        if(meal.ingredients !== undefined) {
          sumIngredients(meal.ingredients);
        }
      });
    });
  }, [mealPlanner]);

  const sumIngredients = (ingredients) => {
    Object.keys(ingredients).map((item) => {
      setShoppingList(prevState => ({ 
        ...prevState, 
        [item] : [ ...ingredients[item]]
      }));
    });
  };

  const formatTitle = (data) =>  {
    let tmp = data.split("_");
    tmp = tmp.map(e => e.charAt(0).toUpperCase() + e.slice(1));
    return tmp.join(" ");
  };

  return (
    <>
      {Object.keys(shoppingList).map((item, index) => {
        return(
          <div key={index}>
            <Title level={3}>{formatTitle(item)}</Title>
            {shoppingList[item].map((data, i) => {
              return (
                <p key={i}>{data.name}{data.quantity && <span>,{data.quantity} {data.type}</span>}</p>
              );
            })}
          </div>
        );
      })}
    </>
  );
}

export default ShoppingListComponent;