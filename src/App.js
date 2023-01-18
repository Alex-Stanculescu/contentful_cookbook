import "./App.css";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import client from "./client";
import Footer from "./components/Footer";
import CategoriesContainer from "./components/CategoriesContainer";
import { Routes, Route, Link, NavLink, useNavigate } from "react-router-dom";
import Desserts from './components/dessert/Desserts';
import Dessert from './components/dessert/Dessert';
import Dinners from './components/dinner/Dinners'
import Lunches from "./components/lunch/Lunches";
import Breakfasts from "./components/breakfast/Breakfasts";



function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    client
      .getEntries({
        content_type: "post",
      })
      .then((response) => {
        setItems(response.items);
        console.log(response.items);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        {/* <CategoriesContainer /> */}

        <Routes>
          <Route path="/" element={<CategoriesContainer />} />
          <Route path="/dessert" element={<Desserts items={items} />} />
          <Route path="/dessert/:id" element={<Dessert items={items} />} />
          <Route path="/breakfast" element={<Breakfasts items={items} />} />
          <Route path="/lunch" element={<Lunches items={items} />} />
          <Route path="/dinner" element={<Dinners items={items} />} />
      
      </Routes>

        {/* <ul>
          {items.map((element) => {
            return (
              <img
                alt="img_of_food"
                src={element.fields.coverImage.fields.file.url}
                key={element.sys.id}
              />
            );
          })}
        </ul> */}

        {/* <h1>{items[0].fields.title}</h1> */}
      </header>
      <Footer />
    </div>
  );
}

export default App;
