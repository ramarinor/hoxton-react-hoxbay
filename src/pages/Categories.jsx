import { Link } from 'react-router-dom'

function Categories () {
  // fetch categories from server

  return (
    <div>
      <h1>Categories</h1>
      <ul>
        <li>
          <Link to='/categories/1'>Category 1</Link>
        </li>
        <li>
          <Link to='/categories/2'>Category 2</Link>
        </li>
      </ul>
    </div>
  )
}

export default Categories
