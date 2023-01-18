import React from 'react'
import {useNavigate, useParams} from 'react-router-dom';

function Lunch(items) {
  const navigate = useNavigate();
    const {id} = useParams();
  return (
    <div>
      {id && items
        .filter((item) => id == item.sys.id)
        .map((item) => (
          <div>
            <h2>{item.fields.title}</h2>
            <h4>{item.fields.excerpt}</h4>
            <img src={item.fields.coverImage.fields.file.url} className="" alt="..." />
            <h5>{`ingredients: ${item.fields.ingredrients}`}</h5>
            <h6>{`ingredients: ${item.fields.content.content}`}</h6>
           <button onClick={() => navigate('/')}>Go back to main</button>
            <button onClick={() => navigate('/lunch')}>Go back Lunch</button>
          </div>
      ))}
    </div>
  )
}

export default Lunch