import {Link, Outlet, useNavigate } from 'react-router-dom';

function Lunches({items}){
  console.log(items)
  const navigate = useNavigate();
  return (
    <div>
      <h1>Lunch</h1>
            {items
              .filter(item => item.fields.dinner === 'Lunch')
              .map((item) => (
                <div>
                  <div className="card-card" style={{ width: "18rem" }}>
                    <img src={item.fields.coverImage.fields.file.url} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <p className="card-text"></p>
                      <button onClick={() => navigate(`/${item.fields.title.toLowerCase()}`)}>{item.fields.title}</button>
                    </div>
                  </div>
                </div>
              ))}
        <Outlet />
    </div>
  )
}

export default Lunches;