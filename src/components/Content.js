import React, { useEffect, useState } from 'react';
import axios from 'axios';


export default function Content() {
    const [title, setTitle] = useState([]);

    useEffect(() => {
      axios
        .get(
            `https://cdn.contentful.com/spaces/jpjx9bkdak1b/environments/master/entries?access_token=Bzv14kjA5HQefUh4bx4QQlPtFeUyBqob6rFyL2RvunQ`
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
        <h1> { title } </h1>
    </div> 
  )
}
