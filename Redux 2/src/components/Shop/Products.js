import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          id="m1"
          title="Item 1"
          price={6}
          description="This is a first product - amazing!"
        />

        <ProductItem
          id="m2"
          title="Item 2"
          price={8}
          description="This is a second product - interesting!"
        />
      </ul>
    </section>
  );
};

export default Products;
