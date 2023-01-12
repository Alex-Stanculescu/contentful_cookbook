import React from "react";
import "./CategoryCard.css";
import { useNavigate, Link, Outlet } from 'react-router-dom';

export default function CategoryCard({ card }) {
  const navigate = useNavigate();
  
  return (
    <div>
      <Link to={`/${card.title.toLowerCase()}`}>
        <div className="card" style={{ width: "18rem" }}>
          <img src={card.src} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">{card.title}</p>
            <button onClick={() => navigate(`/${card.title.toLowerCase()}`)}>{card.title}</button>
          </div>
        </div>
      </Link>
      <Outlet />
    </div>
  );
}
