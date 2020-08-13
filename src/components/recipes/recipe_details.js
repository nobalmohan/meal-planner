import React from "react";
import { Row, Col, Button, Typography } from "antd";

import "./recipe.css";

function RecipeDetails(props) {
  const { meal } = props;

  const { Title } = Typography;
  return (
    <>
      <Title style={{ margin: 0 }}>{meal.title}</Title>
      <br />
      <Row type="flex" justify="space-between">
        <Col span={6}>
          <img src={meal.image} alt={meal.title}/>
          <div className="ingredients-block">
            <Title level={3}>Ingredients</Title>
            {Object.values(meal.ingredients).map((item, index)=> {
              return(
                <span key={index}>
                  {item.map((data, i)=> {
                    return  <p key={i}>{data.name} {data.quantity} {data.type}</p>;
                  })}
                </span>
              );
            })}
          </div>
        </Col>
        <Col span={16}>
          <p style={{ marginTop: "5%" }}>{meal.description}</p>
          <br />
          <Title level={3}>Instructions</Title>
          {meal.instructions.map((step, index) => {
            return(
              <Row key={index} type="flex" justify="space-between">
                <Col span={1}> <Button className="green-btn" type="circle">{index}</Button></Col>
                <Col span={22}> <p>{step}</p></Col>
              </Row>
            );
          })}
        </Col>
      </Row>
    </>
  );
}

export default RecipeDetails;