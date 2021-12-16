import "./Card.css";

const Card = (props) => {
  //   also get class from props
  const classes = "card " + props.className;
  // menggunakan props children sebagai props
  return <div className={classes}>{props.children}</div>;
};

export default Card;
