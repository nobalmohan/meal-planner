import React, { useEffect, useState } from "react";
import { Tabs, Button, Input } from "antd";
import RecipeCard from "components/recipes/recipe_card";
import MealList from "data/meal_list_data";

function AddMealComponent(props) {
  const { TabPane } = Tabs;
  const { Search } = Input;
  const [recipeSuggestion, setSuggestion] = useState({});

  const [recipeList, setRecipe] = useState([...MealList]);

  useEffect(() => {
    const random = Math.floor(Math.random() * recipeList.length);
    setSuggestion(recipeList[random]);
  }, [recipeList]);

  const newSuggestion = () => {
    const random = Math.floor(Math.random() * recipeList.length);
    setSuggestion(recipeList[random]);
  };

  const favoriteList = [
    {
      "title": "Keto turkey plate",
      "description": "Real food on a plate. Turkey. Avocado. Lettuce. Cream cheese and olive oil. Because a keto dinner can be this simple.",
      "image": "https://i.dietdoctor.com/wp-content/uploads/2017/08/DD-481-ketoturkey.jpg?auto=compress%2Cformat&w=420&h=260&fit=crop",
      "id": 1
    }
  ];

  const searchList = [
    {
      "title": "Low-carb lamb roast with broccoli purée",
      "description": "Savory, garlicy and slightly citrusy, this is the roast for you and yours! If good food makes good memories, this is the perfect roast for holidays or Sunday dinners. And the broccoli purée is beyond luxurious. You want this on your table!",
      "image": "https://i.dietdoctor.com/wp-content/uploads/2016/03/Matkarlek-13-1.jpg?auto=compress%2Cformat&w=420&h=260&fit=crop",
      "id": 4
    }
  ];

  return (
    <>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Suggestion" key="1">
          <RecipeCard {...recipeSuggestion} style={{ marginBottom: "10px" }} />
          <br />
          <Button type="secondary" shape="round" style={{ marginRight: "5px" }} onClick={newSuggestion}>New Suggestion</Button>
          <Button type="primary" className="green-btn" shape="round" onClick={() => props.onOk(recipeSuggestion)}>Choose Meal</Button>
        </TabPane>
        <TabPane tab="Favorites" key="2">
          {Object.values(favoriteList).map(item => {
            return(
              <RecipeCard {...item} key={item.id} style={{ marginBottom: "10px" }} />
            );
          })}
        </TabPane>
        <TabPane tab="Search / Browse" key="3">
          <Search
            placeholder="What are you looking?"
            enterButton="Search"
            size="large"
            style={{ margin: "20px 0" }}
          />
          {Object.values(searchList).map(item => {
            return(
              <RecipeCard {...item} key={item.id}  style={{ marginBottom: "10px" }}/>
            );
          })}
        </TabPane>
      </Tabs>
    </>
  );
}

export default AddMealComponent;  