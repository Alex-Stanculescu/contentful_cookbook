import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import CategoryCard from "./CategoryCard";

export default function CategoriesContainer({ categories }) {
const categoryCardsArray = [{title: "Breakfast", src: "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQdYtaVVpaZYGRE137kU-1_3H63-8-U4xo0zbRGjzPCQv6IXFjMRnHDAotb8wMIRiA4SOsXChetFEX09LtxAv8"},
{title: "Lunch", src: "https://img.taste.com.au/45Y4XB7k/w1200-h630-cfill/taste/2018/02/barbecued-chicken-rice-bowls-taste-135064-1.jpg"}]


  return (
    <div>
      <Container>
        <Row>
          <Col>
            <CategoryCard categoryCardsArray={categoryCardsArray} />
          </Col>
          <Col>
            <CategoryCard categoryCardsArray={categoryCardsArray} />
          </Col>
        </Row>
        <Row>
          <Col>
            <CategoryCard categoryCardsArray={categoryCardsArray} />
          </Col>
          <Col>
            <CategoryCard categoryCardsArray={categoryCardsArray} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
