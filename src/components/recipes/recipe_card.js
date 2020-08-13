import React from "react";
import { Row, Col, Rate, Typography } from "antd";

function RecipeCard(props) {
  const { title, image, description } = props;
  const { Title } = Typography;
  return (
    <>
      <Row type="flex" justify="space-between">
        <Col span={12}>
          <img src={image} alt={title}/>
        </Col>
        <Col span={10}>
          <Title style={{ margin: 0 }}>{title}</Title>
          <Rate value={3} />
          <br />
          <p>{description}</p>
        </Col>
      </Row>
    </>
  );
}

export default RecipeCard;