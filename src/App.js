import "./App.css";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import client from "./client";
import Footer from "./components/Footer";


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
        <ul>
          {items.map((element) => {
            return (
              <img
                alt="img_of_food"
                src={element.fields.coverImage.fields.file.url}
                key={element.sys.id}
              />
            );
          })}
        </ul>

        {/* <h1>{items[0].fields.title}</h1> */}
      </header>
      <Footer />
    </div>
  );
}

export default App;
