import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'
import classes from "./MainNavigation.module.css";

export default function MainNavigation() {

  const favorites = useSelector(state => state.favorites)
  const favoritesLength = favorites.length

  return (
    <header className={classes.header} data-test="navigation-header">
      <Link to='/'><div className={classes.logo}>React Meetups</div></Link>
      <nav>
        <ul>
          <li>
            <Link to="/" >
              All Meetups
             </Link>
          </li>

          <li>
            <Link to="meetup-form" >
              Add New Meetup
             </Link>
          </li>
          <li>
            <Link to="/favorites">
              My Favorites
              <span className={classes.badge}>{favoritesLength}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
