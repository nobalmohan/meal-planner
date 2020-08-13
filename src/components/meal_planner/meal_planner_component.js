import React, { useEffect, useContext, useState } from "react";
import { Link, useLocation } from "@reach/router";
import { parse } from "query-string";
import { Tabs, Layout, Breadcrumb, Typography } from "antd";
import MealPlannerContext from "context/meal_planner_context";

import OverviewComponent from "./overview_tab/overview_tab_component";
import RecipeList from "./recipe_tab/meal_recipes_list_component";
import ShoppingList from "./shopping_list_tab/shopping_list_component";


const { Title } = Typography;
const { Content } = Layout;
const { TabPane } = Tabs;

function MealPlannerComponent() {  
  const [ pageTitle, setPageTitle ] = useState("New meal plan");
  const { mealPlans, mealPlanner } = useContext(MealPlannerContext);
  const location = useLocation();

  useEffect(() => {
    let query = parse(location.search);
    let mealPlan = mealPlans.find(item => { return item.id === parseInt(query.id);});
    if(mealPlan !== undefined) {
      setPageTitle(mealPlan.name);
    }
  }, []);
  
  return (
    <>
      <Content className="site-layout" style={{ padding: "0px 50px", margin: "0% auto", width: "80%" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
          <Breadcrumb.Item>{pageTitle}</Breadcrumb.Item>
        </Breadcrumb>
        <Title level={2}>{pageTitle}</Title>
        <p>Only you can view this meal plan.</p>
        <br />
        <Tabs defaultActiveKey="1">
          <TabPane tab="Overview" key="1">
            <OverviewComponent />
          </TabPane>
          <TabPane tab="Recipes" key="2">
            <RecipeList />
          </TabPane>
          <TabPane tab="Shopping List" key="3">
            <ShoppingList />
          </TabPane>
        </Tabs>
      </Content>
    </>
  );
}

export default MealPlannerComponent;