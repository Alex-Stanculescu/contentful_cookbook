import {Link, Outlet, useNavigate } from 'react-router-dom';

function Desserts({items}){
  console.log(items)
  const navigate = useNavigate();
  return (
    <div>
      <h1>Desserts</h1>
            {items
              .filter(item => item.fields.dinner === 'Dessert')
              .map((item) => (
                <div>
                  <div className="card-card" style={{ width: "18rem" }}>
                    <img src={item.fields.coverImage.fields.file.url} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <p className="card-text">{item.fields.title}</p>
                      <button onClick={() => navigate(`/dessert/${item.sys.id}`)}>{item.fields.title}</button>
                    </div>
                  </div>
                </div>
              ))}
        <Outlet />
    </div>
  )
}

export default Desserts;