import {useNavigate, useParams} from 'react-router-dom';

function Dessert({items}) {
    const navigate = useNavigate();
    const {id} = useParams();
    console.log(id);
  return (
    <div>
      {id && items
        .filter((item) => id == item.sys.id)
        .map((item) => (
          <div>
            <h3>{item.fields.title}</h3>
            <button onClick={() => navigate('/')}>Go back to main</button>
            <button onClick={() => navigate('/dessert')}>Go back Desserts</button>
          </div>
      ))}
    </div>
  )
}

export default Dessert;