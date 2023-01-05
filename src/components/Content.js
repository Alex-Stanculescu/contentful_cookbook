import React, { useEffect, useState } from "react";
import axios from "axios";
import bootstrap from "bootstrap";

export default function Content() {
  const [title, setTitle] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://cdn.contentful.com/spaces/2jvu3rhkirbd/environments/master/entries?access_token=TnpG2u1yvYFugX1rESNZsaOn_Yd9T3tdSSX3Y94S8EI`
      )
      .then((response) => {
        setTitle(response.data.items[0].fields.title);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1> {title} </h1>
    </div>
  );
}
