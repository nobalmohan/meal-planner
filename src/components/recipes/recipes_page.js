import React, { useContext, useEffect } from "react";
import { Link } from "@reach/router";
import {  Layout, Breadcrumb } from "antd";
import MealPlannerContext from "context/meal_planner_context";
import RecipeDetails from "components/recipes/recipe_details";

const { Content } = Layout;

function RecipePageComponent(props) {
  const { mealDetail } = useContext(MealPlannerContext);
  return (
    <>
      <Content className="site-layout" style={{ padding: "0px 50px", margin: "0% auto", width: "80%" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
          <Breadcrumb.Item>Recipe</Breadcrumb.Item>
        </Breadcrumb>
        {Object.keys(mealDetail).length > 0 ? <RecipeDetails meal={mealDetail} /> : <p>No recipes found!</p>}
        
      </Content>
    </>
  );
}

export default RecipePageComponent;