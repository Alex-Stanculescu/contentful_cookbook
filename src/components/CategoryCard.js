import React from "react";
import "./CategoryCard.css";
import { useNavigate } from 'react-router-dom';

export default function CategoryCard({ card }) {
  return (
    <div>
      
      <div className="card" style={{ width: "18rem" }}>
        <img src={card.src} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">{card.title}</p>
        </div>
      </div>
    </div>
  );
}
