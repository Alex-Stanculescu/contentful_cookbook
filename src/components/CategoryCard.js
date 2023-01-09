import React from "react";
import CategoriesContainer from "./CategoriesContainer";

export default function CategoryCard({ categoryCardsArray }) {
  return (
    <div>
      {categoryCardsArray.map((element) => (
        <div className="card" style={{ width: "18rem" }}>
          <img src={element.src} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">{element.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
