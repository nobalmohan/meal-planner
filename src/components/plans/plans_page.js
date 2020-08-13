import React, { useContext } from "react";
import { Link } from "@reach/router";
import { Layout, Breadcrumb, Typography, Button } from "antd";
import MealPlannerContext from "context/meal_planner_context";

const { Title } = Typography;
const { Content } = Layout;

function PlansComponent(props) {
  const { mealPlans } = useContext(MealPlannerContext);
  return (
    <>
      <Content className="site-layout" style={{ padding: "0px 50px", margin: "0% auto", width: "80%" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
        </Breadcrumb>
        <Title level={2}>My meal plans</Title>
        <p>Start fresh and get creative. Pick and choose from hundreds of our low-carb and keto recipes to create your ultimate meal plans. Excited? Start planning for next week today. When you’re done you’ll find all of your tasty creations below.</p>
        <Button  shape="round" className="green-btn"><Link to="/meal-planner">Create new meal plan</Link></Button>
        <br /><br /><br />
        {mealPlans.map((item, index) => {
          return <Link to={"/meal-planner?id=" + item.id} key={index}> 
            <Title level={2} style={{ color: "#6188ce" }}>{item.name}</Title>
          </Link>;
        })}
      </Content>
    </>
  );
}

export default PlansComponent;