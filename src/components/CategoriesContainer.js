import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./CategoriesContainer.css"
import Container from "react-bootstrap/Container";
import CategoryCard from "./CategoryCard";

export default function CategoriesContainer({ categories }) {
  const categoryCardsArray = [

    {
      title: "Dessert",
      src: "https://www.meine-familie-und-ich.de/sites/meine-familie-und-ich.de/files/styles/facebook/public/2020-01/pflaumendessert_rezept.jpg?h=7ce25919&itok=snsTMuip",
    },
   
    {
      title: "Lunch",
      src: "https://img.taste.com.au/45Y4XB7k/w1200-h630-cfill/taste/2018/02/barbecued-chicken-rice-bowls-taste-135064-1.jpg",
    },
    {
      title: "Dinner",
      src: "https://image.gala.de/22602146/t/la/v13/w1440/r1.5/-/abendessen-pasta-dinner-cancelling-abnehmen-studie.jpg",
    },
    {
      title: "Breakfast",
      src: "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQdYtaVVpaZYGRE137kU-1_3H63-8-U4xo0zbRGjzPCQv6IXFjMRnHDAotb8wMIRiA4SOsXChetFEX09LtxAv8",
    },
  ];


  return (
    <div className="container">
      <Container>
        {categoryCardsArray.map((card) => {
          return <CategoryCard card={card} />;
        })}
      </Container>
    </div>
  );
}
