import {useNavigate, useParams} from 'react-router-dom';

const desserts = [
  {
      id: 1,
      name: "tiramisu"
  },
  {
      id: 2,
      name: "natillas"
  }
]

function Dessert() {
    const navigate = useNavigate();
    const {id} = useParams();
    console.log(id);
  return (
    <div>
      {id && desserts
        .filter((dessert) => id == dessert.id)
        .map((dessert) => (
          <div>
            <h3>{dessert.name}</h3>
            <button onClick={() => navigate('/')}>Go back to main</button>
            <button onClick={() => navigate('/desserts')}>Go back Desserts</button>
          </div>
      ))}
    </div>
  )
}

export default Dessert;