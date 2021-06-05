import { Fragment } from "react";
import classes from "./Header.module.css";
import image from "../../Assets/meals.jpg";
import HeaderBtn from "./HeaderCartBtn";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>MealsReady.com</h1>
        <HeaderBtn onClick={props.onOpen} />
      </header>
      <div className={classes["main-image"]}>
        <img src={image} alt="full of meals in a plate" />
      </div>
    </Fragment>
  );
};

export default Header;
