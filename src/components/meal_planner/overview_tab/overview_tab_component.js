import React, { useEffect, useContext, useState } from "react";
import { Row, Col, Modal, Button, Typography } from "antd";
import AddMeal from "./add_meal_component";
import { navigate, useLocation } from "@reach/router";
import { parse } from "query-string";
import MealPlannerContext from "context/meal_planner_context";

import "components/meal_planner/meal_planner_styles.css";

const { Title } = Typography;

function OverviewComponent() {
  const { setPlanner, setMealDetails } = useContext(MealPlannerContext);
  const [showAddMeal, toggleAddMeal] = useState(false);
  const [selectedMealDay, setMealDay] = useState("");
  const [selectedMealTime, setMealTime] = useState("");
  const { mealPlans, mealPlanner } = useContext(MealPlannerContext);
  const location = useLocation();
  const [plannerTable, updatePlannerTable] = useState(
    {
      "Monday" : {
        "Breakfast": {},
        "Lunch": {},
        "Dinner": {}
      },
      "Tuesday" : {
        "Breakfast": {},
        "Lunch": {},
        "Dinner": {}
      },
      "Wednesday" : {
        "Breakfast": {},
        "Lunch": {},
        "Dinner": {}
      },
      "Thursday" : {
        "Breakfast": {},
        "Lunch": {},
        "Dinner": {}
      },
      "Friday" : {
        "Breakfast": {},
        "Lunch": {},
        "Dinner": {}
      },
      "Saturday" : {
        "Breakfast": {},
        "Lunch": {},
        "Dinner": {}
      },
      "Sunday" : {
        "Breakfast": {},
        "Lunch": {},
        "Dinner": {}
      }
    }
  );

  useEffect(() => {
    let query = parse(location.search);
    let mealPlan = mealPlans.find(item => { return item.id === parseInt(query.id);});
    if(mealPlan !== undefined) {
      updatePlannerTable({ ...mealPlan.plans });
    }
  }, []);

  useEffect(() => {
    setPlanner(plannerTable);
  }, [plannerTable]);

  const handleOk = recipe => {
    updatePlannerTable(prevState => ({ 
      ...prevState, 
      [selectedMealDay] : {
        ...prevState[selectedMealDay],
        [selectedMealTime]: { ...recipe }
      }
    }));
    
    toggleAddMeal(false);
  };

  const handleCancel = e => {
    toggleAddMeal(false);
  };

  const selectMeal = (dayPlan, mealTime) => {
    setMealDay(dayPlan);
    setMealTime(mealTime);
    toggleAddMeal(true);
  };

  const gotoRecipe = (dayPlan, mealTime) => {
    setMealDetails(plannerTable[dayPlan][mealTime]);
    navigate("/recipes");
  };

  const NewMeal = (dayPlan, mealTime) => {
    return(
      <div className="add-meal-card"> 
        <Button type="text" onClick={() => selectMeal(dayPlan, mealTime)}>
          <Title  level={4}>Add {mealTime}</Title>
        </Button>
      </div>
    );
  };

  const selectedMeal = (dayPlan, mealTime) => {
    return(
      <div className="selected-meal-card" onClick={() => gotoRecipe(dayPlan, mealTime)}> 
        <img src={plannerTable[dayPlan][mealTime].image} />
        <span className="title"> {plannerTable[dayPlan][mealTime].title}</span>
      </div>
    );
  };

  return (
    <>
      {Object.keys(plannerTable).map((dayPlan) => {
        return(
          <div key={dayPlan}>
            <Title  level={3}>{dayPlan}</Title>
            <Row type="flex" justify="space-between" align="middle">
              {Object.keys(plannerTable[dayPlan]).map((mealTime) => {
                return(
                  <Col span="7" key={mealTime}>
                    {Object.values(plannerTable[dayPlan][mealTime]).length === 0 ?  NewMeal(dayPlan, mealTime) : selectedMeal(dayPlan, mealTime)}
                  </Col>
                );
              })}
            </Row>
            <br />
          </div>
        );
      })}
  
      {showAddMeal && <Modal
        width={800}
        visible={showAddMeal}
        onCancel={handleCancel}
        footer={[]}
      >
        <AddMeal onOk={handleOk} onCancel={handleCancel}/>
      </Modal>}
    </>
  );
}

export default OverviewComponent;