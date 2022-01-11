import { Link, useNavigate } from "react-router-dom";

const Products = () => {
  // replace useHistory
  const navigate = useNavigate();

  const moveBack = () => {
    navigate(-1);
    // navigate('/welcome')
  };

  return (
    <section>
      <h1>The Products Page</h1>
      <button onClick={moveBack}>Back</button>
      <ul>
        <li>
          <Link to="/products/p1">A Book</Link>
        </li>
        <li>
          <Link to="/products/p2">A Carpet</Link>
        </li>
        <li>
          <Link to="/products/p3">An Online Course</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
