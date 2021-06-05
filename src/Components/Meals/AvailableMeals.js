import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
const DummyMeals = [
  {
    id: "m1",
    name: "Chicken-Biriyani",
    description: "Finest Chicken Biriyani ever in india",
    price: 150.0,
  },
  {
    id: "m2",
    name: "Shaway",
    description: "Best Shaway in your dream",
    price: 80.0,
  },
  {
    id: "m3",
    name: "Veg-Biriyani",
    description: "Fresh vegetable ever made in world",
    price: 250.0,
  },
  {
    id: "m4",
    name: "Fish-curry",
    description: "Kerala traditional fish curry",
    price: 60.0,
  },
  {
    id: "m5",
    name: "Kappa/Tapioca",
    description: "Best combo for Fish-curry",
    price: 120.0,
  },
];

const AvailableMeals = () => {
  const mealsList = DummyMeals.map((item) => (
    <MealItem
      id={item.id}
      key={item.id}
      description={item.description}
      name={item.name}
      price={item.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
