import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import { useEffect, useState, useCallback } from "react";
import useHttp from "../../hooks/use-http";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);

  const transformData = useCallback((taskObject) => {
    const mealList = [];
    for (const key in taskObject) {
      mealList.push({
        id: key,
        name: taskObject[key].name,
        description: taskObject[key].description,
        price: taskObject[key].price,
      });
    }
    setMeals(mealList);
  }, []);

  const httpData = useHttp(transformData);
  const { isLoading, error, sendRequest } = httpData;

  useEffect(() => {
    sendRequest({
      url: "https://react-project-eb3a6-default-rtdb.firebaseio.com/meals.json",
    });
  }, [sendRequest]);

  let content = <h3>Loading...</h3>;

  if (error) {
    content = <h3>{error}</h3>;
  }

  if (!isLoading && meals.length === 0 && !error) {
    content = <h3>No meals found!</h3>;
  }

  if (meals.length > 0) {
    content = meals.map((meal) => (
      <MealItem
        key={meal.id}
        id={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    ));
  }

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{content}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
