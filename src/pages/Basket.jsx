import { Link } from 'react-router-dom'

function Basket () {
  // fetch basket

  return (
    <div>
      <h1>Basket</h1>

      <ul>
        <li>
          <Link to='/products/1'>Basket item 1</Link>
        </li>
        <li>
          <Link to='/products21'>Basket item 2</Link>
        </li>
      </ul>
    </div>
  )
}

export default Basket
