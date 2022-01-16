import { Link } from "react-router-dom";

function Category({ category }) {
  return (
    <li className="category">
      <Link to={`/categories/${category.id}`}>{category.name}</Link>
    </li>
  );
}
export default Category;
