import {useNavigate, useParams} from 'react-router-dom';

function Dinner({items}) {
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
            <button onClick={() => navigate('/dinner')}>Go back Dinners</button>
          </div>
      ))}
    </div>
  )
}

export default Dinner;