import "./App.css";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import client from "./client";
import Footer from "./components/Footer";
import CategoriesContainer from "./components/CategoriesContainer";
import { Routes, Route, Link, NavLink, useNavigate } from "react-router-dom";
import Desserts from './components/dessert/Desserts';
import Dessert from './components/dessert/Dessert';


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
          <Route path="/desserts" element={<Desserts />} />
          <Route path="/desserts/:id" element={<Dessert />} />
          <Route path="/breakfast" element={<Desserts />} />
          <Route path="/lunch" element={<Desserts />} />
          <Route path="/dinner" element={<CategoriesContainer />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} /> */}
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
