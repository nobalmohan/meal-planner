import React from "react";
import { Router } from "@reach/router";

import { AppProvider } from "./context/meal_planner_context";

import Plans from "./components/plans/plans_page";
import MealPlanner from "./components/meal_planner/meal_planner_component";
import Recipes from "./components/recipes/recipes_page";
import "antd/dist/antd.css";

function App() {
  return (
    <AppProvider>
      <Router>
        <Plans path="/" />
        <MealPlanner path="/meal-planner" />
        <Recipes path="/recipes" />
      </Router>
    </AppProvider>
  );
}

export default App;
