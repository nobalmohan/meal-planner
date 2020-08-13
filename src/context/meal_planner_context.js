import React, { Component } from "react";
import DefaultMealPlan from "data/meal_plan_list";

const MealPlannerContext = React.createContext();

class AppProvider extends Component {

  state = {
    mealPlans: [
      {
        "id": 640450,
        "name": "August keto meal plan",
        "plans": { ...DefaultMealPlan }
      }
    ],
    mealPlanner: {},
    mealDetail: {}
  }

  setPlanner = meals => {
    this.setState(prevState => ({ "mealPlanner": meals }));
  }

  updateMealPlan = meals => {
    this.setState(prevState => ({ "mealPlans": meals }));
  }

  setMealDetails = meal => {
    this.setState(prevState => ({ "mealDetail": meal }));
  }

  render() {
    const { children } = this.props;
    const { mealPlans, mealPlanner, mealDetail  } = this.state;
    const { updateMealPlan, setPlanner, setMealDetails } = this;

    return (
      <MealPlannerContext.Provider
        value={{
          mealPlans,
          mealPlanner,
          mealDetail,
          updateMealPlan,
          setPlanner,
          setMealDetails
        }}
      >
        {children}
      </MealPlannerContext.Provider>
    );
  }
}

export { AppProvider };

export const AppConsumer = MealPlannerContext.Consumer;

export default MealPlannerContext;