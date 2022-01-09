import { useParams } from "react-router";

const ProductDetail = () => {
  const param = useParams();

  return (
    <section>
      <h1>Product Detail</h1>
      <p>{param.productId}</p>
    </section>
  );
};

export default ProductDetail;
