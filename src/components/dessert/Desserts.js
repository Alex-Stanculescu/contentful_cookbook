import {Link, Outlet } from 'react-router-dom'

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
function Desserts() {
  return (
    <div>
        <ul>
            {desserts.map((dessert) => (<Link to={`/desserts/${dessert.id}`}><li>{dessert.name}</li></Link>))}
        </ul>
        <Outlet />
    </div>
  )
}

export default Desserts;